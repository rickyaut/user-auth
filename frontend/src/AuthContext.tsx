import React, { createContext, useContext, useReducer, useEffect, useCallback, ReactNode } from 'react';
import axios from 'axios';

interface User {
  id: number;
  email: string;
  fullname: string;
  phone: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
}

interface AuthContextType extends AuthState {
  signup: (email: string, password: string, fullname: string, phone: string) => Promise<User>;
  signin: (email: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
}

type AuthAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User }
  | { type: 'CLEAR_USER' };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING': return { ...state, loading: action.payload };
    case 'SET_USER': return { ...state, user: action.payload, loading: false };
    case 'CLEAR_USER': return { ...state, user: null, loading: false };
    default: return state;
  }
};

const api = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null, loading: true });

  const checkAuth = useCallback(async () => {
    try {
      const response = await api.get<User>('/api/me');
      dispatch({ type: 'SET_USER', payload: response.data });
    } catch (error) {
      dispatch({ type: 'CLEAR_USER' });
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const signup = useCallback(async (email: string, password: string, fullname: string, phone: string): Promise<User> => {
    const response = await api.post<User>('/api/auth/signup', { email, password, fullname, phone });
    return response.data;
  }, []);

  const signin = useCallback(async (email: string, password: string): Promise<void> => {
    await api.post('/api/auth/signin', { email, password });
    await checkAuth();
  }, [checkAuth]);

  const signout = useCallback(async (): Promise<void> => {
    await api.post('/api/auth/signout');
    dispatch({ type: 'CLEAR_USER' });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};