/**
 * Samsara API
 * # Introduction  Samsara provides API endpoints for interacting with Samsara Cloud, so that you can build powerful applications and custom solutions with sensor data. Samsara has endpoints available to track and analyze sensors, vehicles, and entire fleets.  The Samsara Cloud API is a [RESTful API](https://en.wikipedia.org/wiki/Representational_state_transfer) accessed by an [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) client such as wget or curl, or HTTP libraries of most modern programming languages including python, ruby, java. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients. We allow you to interact securely with our API from a client-side web application (though you should never expose your secret API key). [JSON](http://www.json.org/) is returned by all API responses, including errors. If you’re familiar with what you can build with a REST API, the following API reference guide will be your go-to resource.  API access to the Samsara cloud is available to all Samsara administrators. To start developing with Samsara APIs you will need to [obtain your API keys](#section/Authentication) to authenticate your API requests.  If you have any questions you can reach out to us on [support@samsara.com](mailto:support@samsara.com)  # Endpoints  All our APIs can be accessed through HTTP requests to URLs like:  ```curl https://api.samsara.com/<version>/<endpoint> ```  All our APIs are [versioned](#section/Versioning). If we intend to make breaking changes to an API which either changes the response format or request parameter, we will increment the version.  # Authentication  To authenticate your API request you will need to include your secret token. You can manage your API tokens in the [Dashboard](https://cloud.samsara.com). They are visible under `Settings->Organization->API Tokens`.  Your API tokens carry many privileges, so be sure to keep them secure. Do not share your secret API tokens in publicly accessible areas such as GitHub, client-side code, and so on.  Authentication to the API is performed via [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Provide your API token as the basic access_token value in the URL. You do not need to provide a password.  ```curl https://api.samsara.com/<version>/<endpoint>?access_token={{access_token}} ```  All API requests must be made over [HTTPS](https://en.wikipedia.org/wiki/HTTPS). Calls made over plain HTTP or without authentication will fail.  # Request Methods  Our API endpoints use [HTTP request methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) to specify the desired operation to be performed. The documentation below specified request method supported by each endpoint and the resulting action.  ## GET  GET requests are typically used for fetching data (like data for a particular driver).  ## POST  POST requests are typically used for creating or updating a record (like adding new tags to the system). With that being said, a few of our POST requests can be used for fetching data (like current location data of your fleet).  ## PUT  PUT requests are typically used for updating an existing record (like updating devices associated with a particular tag).  ## DELETE  DELETE requests are used for deleting a record (like deleting a tag from the system).  # Response Codes  All API requests will respond with appropriate [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). Your API client should handle each response class differently.  ## 2XX  These are successful responses and indicate that the API request returned the expected response.  ## 4XX  These indicate that there was a problem with the request like a missing parameter or invalid values. Check the response for specific [error details](#section/Error-Responses). Requests that respond with a 4XX status code, should be modified before retrying.  ## 5XX  These indicate server errors when the server is unreachable or is misconfigured. In this case, you should retry the API request after some delay.  # Error Responses  In case of a 4XX status code, the body of the response will contain information to briefly explain the error reported. To help debugging the error, you can refer to the following table for understanding the error message.  | Status Code | Message | Description | |-------------|----------------|-------------------------------------------------------------------| | 401 | Invalid token | The API token is invalid and could not be authenticated. Please refer to the [authentication section](#section/Authentication). | | 404 | Page not found | The API endpoint being accessed is invalid. | | 400 | Bad request | Default response for an invalid request. Please check the request to make sure it follows the format specified in the documentation. |  # Versioning  All our APIs are versioned. Our current API version is `v1` and we are continuously working on improving it further and provide additional endpoints. If we intend to make breaking changes to an API which either changes the response format or request parameter, we will increment the version. Thus, you can use our current API version worry free.  # FAQs  Check out our [responses to FAQs here](https://kb.samsara.com/hc/en-us/sections/360000538054-APIs). Don’t see an answer to your question? Reach out to us on [support@samsara.com](mailto:support@samsara.com).
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CurrentDriver', 'model/Driver', 'model/DriverForCreate', 'model/ErrorResponse', 'model/ReactivateDriverParam'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CurrentDriver'), require('../model/Driver'), require('../model/DriverForCreate'), require('../model/ErrorResponse'), require('../model/ReactivateDriverParam'));
  } else {
    // Browser globals (root is window)
    if (!root.SamsaraApi) {
      root.SamsaraApi = {};
    }
    root.SamsaraApi.DriversApi = factory(root.SamsaraApi.ApiClient, root.SamsaraApi.CurrentDriver, root.SamsaraApi.Driver, root.SamsaraApi.DriverForCreate, root.SamsaraApi.ErrorResponse, root.SamsaraApi.ReactivateDriverParam);
  }
}(this, function(ApiClient, CurrentDriver, Driver, DriverForCreate, ErrorResponse, ReactivateDriverParam) {
  'use strict';

  /**
   * Drivers service.
   * @module api/DriversApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DriversApi. 
   * @alias module:api/DriversApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createDriver operation.
     * @callback module:api/DriversApi~createDriverCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Driver} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/create
     * Create a new driver.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/DriverForCreate} createDriverParam Driver creation body
     * @param {module:api/DriversApi~createDriverCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Driver}
     */
    this.createDriver = function(accessToken, createDriverParam, callback) {
      var postBody = createDriverParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling createDriver");
      }

      // verify the required parameter 'createDriverParam' is set
      if (createDriverParam === undefined || createDriverParam === null) {
        throw new Error("Missing the required parameter 'createDriverParam' when calling createDriver");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Driver;

      return this.apiClient.callApi(
        '/fleet/drivers/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deactivateDriver operation.
     * @callback module:api/DriversApi~deactivateDriverCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/{driver_id:[0-9]+}
     * Deactivate a driver with the given driver_id.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} driverId ID of the driver.
     * @param {module:api/DriversApi~deactivateDriverCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deactivateDriver = function(accessToken, driverId, callback) {
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling deactivateDriver");
      }

      // verify the required parameter 'driverId' is set
      if (driverId === undefined || driverId === null) {
        throw new Error("Missing the required parameter 'driverId' when calling deactivateDriver");
      }


      var pathParams = {
        'driver_id': driverId
      };
      var queryParams = {
        'access_token': accessToken,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/fleet/drivers/{driver_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllDeactivatedDrivers operation.
     * @callback module:api/DriversApi~getAllDeactivatedDriversCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Driver>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/inactive
     * Fetch all deactivated drivers for the group.
     * @param {String} accessToken Samsara API access token.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.groupId Optional group ID if the organization has multiple groups (uncommon).
     * @param {module:api/DriversApi~getAllDeactivatedDriversCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Driver>}
     */
    this.getAllDeactivatedDrivers = function(accessToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getAllDeactivatedDrivers");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'group_id': opts['groupId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Driver];

      return this.apiClient.callApi(
        '/fleet/drivers/inactive', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeactivatedDriverById operation.
     * @callback module:api/DriversApi~getDeactivatedDriverByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Driver} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/inactive/{driver_id:[0-9]+}
     * Fetch deactivated driver by driver_id.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} driverId ID of the deactivated driver.
     * @param {module:api/DriversApi~getDeactivatedDriverByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Driver}
     */
    this.getDeactivatedDriverById = function(accessToken, driverId, callback) {
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getDeactivatedDriverById");
      }

      // verify the required parameter 'driverId' is set
      if (driverId === undefined || driverId === null) {
        throw new Error("Missing the required parameter 'driverId' when calling getDeactivatedDriverById");
      }


      var pathParams = {
        'driver_id': driverId
      };
      var queryParams = {
        'access_token': accessToken,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Driver;

      return this.apiClient.callApi(
        '/fleet/drivers/inactive/{driver_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDriverById operation.
     * @callback module:api/DriversApi~getDriverByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrentDriver} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/{driver_id:[0-9]+}
     * Fetch driver by id.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} driverId ID of the driver.
     * @param {module:api/DriversApi~getDriverByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrentDriver}
     */
    this.getDriverById = function(accessToken, driverId, callback) {
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getDriverById");
      }

      // verify the required parameter 'driverId' is set
      if (driverId === undefined || driverId === null) {
        throw new Error("Missing the required parameter 'driverId' when calling getDriverById");
      }


      var pathParams = {
        'driver_id': driverId
      };
      var queryParams = {
        'access_token': accessToken,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CurrentDriver;

      return this.apiClient.callApi(
        '/fleet/drivers/{driver_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reactivateDriverById operation.
     * @callback module:api/DriversApi~reactivateDriverByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrentDriver} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/inactive/{driver_id:[0-9]+}
     * Reactivate the inactive driver having driver_id.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} driverId ID of the deactivated driver.
     * @param {module:model/ReactivateDriverParam} reactivateDriverParam Driver reactivation body
     * @param {module:api/DriversApi~reactivateDriverByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrentDriver}
     */
    this.reactivateDriverById = function(accessToken, driverId, reactivateDriverParam, callback) {
      var postBody = reactivateDriverParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling reactivateDriverById");
      }

      // verify the required parameter 'driverId' is set
      if (driverId === undefined || driverId === null) {
        throw new Error("Missing the required parameter 'driverId' when calling reactivateDriverById");
      }

      // verify the required parameter 'reactivateDriverParam' is set
      if (reactivateDriverParam === undefined || reactivateDriverParam === null) {
        throw new Error("Missing the required parameter 'reactivateDriverParam' when calling reactivateDriverById");
      }


      var pathParams = {
        'driver_id': driverId
      };
      var queryParams = {
        'access_token': accessToken,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = CurrentDriver;

      return this.apiClient.callApi(
        '/fleet/drivers/inactive/{driver_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
