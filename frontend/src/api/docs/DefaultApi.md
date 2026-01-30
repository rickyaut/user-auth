# DefaultApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMeApiMeGet**](#getmeapimeget) | **GET** /api/me | Get Me|
|[**signinApiAuthSigninPost**](#signinapiauthsigninpost) | **POST** /api/auth/signin | Signin|
|[**signoutApiAuthSignoutPost**](#signoutapiauthsignoutpost) | **POST** /api/auth/signout | Signout|
|[**signupApiAuthSignupPost**](#signupapiauthsignuppost) | **POST** /api/auth/signup | Signup|

# **getMeApiMeGet**
> UserResponse getMeApiMeGet()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accessToken: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getMeApiMeGet(
    accessToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accessToken** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signinApiAuthSigninPost**
> any signinApiAuthSigninPost(userLogin)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UserLogin
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userLogin: UserLogin; //

const { status, data } = await apiInstance.signinApiAuthSigninPost(
    userLogin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userLogin** | **UserLogin**|  | |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login successful |  -  |
|**401** | Invalid credentials |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signoutApiAuthSignoutPost**
> any signoutApiAuthSignoutPost()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.signoutApiAuthSignoutPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Logged out successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signupApiAuthSignupPost**
> UserResponse signupApiAuthSignupPost(userCreate)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UserCreate
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let userCreate: UserCreate; //

const { status, data } = await apiInstance.signupApiAuthSignupPost(
    userCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userCreate** | **UserCreate**|  | |


### Return type

**UserResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

