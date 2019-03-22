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
    define(['ApiClient', 'model/AddressParam', 'model/AllRouteJobUpdates', 'model/AssetLocationResponse', 'model/AssetReeferResponse', 'model/CargoResponse', 'model/CurrentDriver', 'model/DataInputHistoryResponse', 'model/DispatchRoute', 'model/DispatchRouteCreate', 'model/DispatchRouteHistory', 'model/DispatchRoutes', 'model/DoorResponse', 'model/Driver', 'model/DriverDailyLogResponse', 'model/DriverForCreate', 'model/DriversResponse', 'model/DriversSummaryParam', 'model/DriversSummaryResponse', 'model/DvirListResponse', 'model/ErrorResponse', 'model/GroupDriversParam', 'model/GroupParam', 'model/HistoryParam', 'model/HistoryParam1', 'model/HosAuthenticationLogsParam', 'model/HosAuthenticationLogsResponse', 'model/HosLogsParam', 'model/HosLogsParam1', 'model/HosLogsParam2', 'model/HosLogsResponse', 'model/HosLogsSummaryResponse', 'model/HumidityResponse', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2008', 'model/MachineHistoryResponse', 'model/ReactivateDriverParam', 'model/SensorHistoryResponse', 'model/SensorParam', 'model/Tag', 'model/TagCreate', 'model/TagUpdate', 'model/TemperatureResponse', 'model/TripResponse', 'model/TripsParam', 'model/VehicleUpdateParam'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddressParam'), require('../model/AllRouteJobUpdates'), require('../model/AssetLocationResponse'), require('../model/AssetReeferResponse'), require('../model/CargoResponse'), require('../model/CurrentDriver'), require('../model/DataInputHistoryResponse'), require('../model/DispatchRoute'), require('../model/DispatchRouteCreate'), require('../model/DispatchRouteHistory'), require('../model/DispatchRoutes'), require('../model/DoorResponse'), require('../model/Driver'), require('../model/DriverDailyLogResponse'), require('../model/DriverForCreate'), require('../model/DriversResponse'), require('../model/DriversSummaryParam'), require('../model/DriversSummaryResponse'), require('../model/DvirListResponse'), require('../model/ErrorResponse'), require('../model/GroupDriversParam'), require('../model/GroupParam'), require('../model/HistoryParam'), require('../model/HistoryParam1'), require('../model/HosAuthenticationLogsParam'), require('../model/HosAuthenticationLogsResponse'), require('../model/HosLogsParam'), require('../model/HosLogsParam1'), require('../model/HosLogsParam2'), require('../model/HosLogsResponse'), require('../model/HosLogsSummaryResponse'), require('../model/HumidityResponse'), require('../model/InlineResponse200'), require('../model/InlineResponse2001'), require('../model/InlineResponse2002'), require('../model/InlineResponse2003'), require('../model/InlineResponse2004'), require('../model/InlineResponse2005'), require('../model/InlineResponse2006'), require('../model/InlineResponse2007'), require('../model/InlineResponse2008'), require('../model/MachineHistoryResponse'), require('../model/ReactivateDriverParam'), require('../model/SensorHistoryResponse'), require('../model/SensorParam'), require('../model/Tag'), require('../model/TagCreate'), require('../model/TagUpdate'), require('../model/TemperatureResponse'), require('../model/TripResponse'), require('../model/TripsParam'), require('../model/VehicleUpdateParam'));
  } else {
    // Browser globals (root is window)
    if (!root.SamsaraApi) {
      root.SamsaraApi = {};
    }
    root.SamsaraApi.DefaultApi = factory(root.SamsaraApi.ApiClient, root.SamsaraApi.AddressParam, root.SamsaraApi.AllRouteJobUpdates, root.SamsaraApi.AssetLocationResponse, root.SamsaraApi.AssetReeferResponse, root.SamsaraApi.CargoResponse, root.SamsaraApi.CurrentDriver, root.SamsaraApi.DataInputHistoryResponse, root.SamsaraApi.DispatchRoute, root.SamsaraApi.DispatchRouteCreate, root.SamsaraApi.DispatchRouteHistory, root.SamsaraApi.DispatchRoutes, root.SamsaraApi.DoorResponse, root.SamsaraApi.Driver, root.SamsaraApi.DriverDailyLogResponse, root.SamsaraApi.DriverForCreate, root.SamsaraApi.DriversResponse, root.SamsaraApi.DriversSummaryParam, root.SamsaraApi.DriversSummaryResponse, root.SamsaraApi.DvirListResponse, root.SamsaraApi.ErrorResponse, root.SamsaraApi.GroupDriversParam, root.SamsaraApi.GroupParam, root.SamsaraApi.HistoryParam, root.SamsaraApi.HistoryParam1, root.SamsaraApi.HosAuthenticationLogsParam, root.SamsaraApi.HosAuthenticationLogsResponse, root.SamsaraApi.HosLogsParam, root.SamsaraApi.HosLogsParam1, root.SamsaraApi.HosLogsParam2, root.SamsaraApi.HosLogsResponse, root.SamsaraApi.HosLogsSummaryResponse, root.SamsaraApi.HumidityResponse, root.SamsaraApi.InlineResponse200, root.SamsaraApi.InlineResponse2001, root.SamsaraApi.InlineResponse2002, root.SamsaraApi.InlineResponse2003, root.SamsaraApi.InlineResponse2004, root.SamsaraApi.InlineResponse2005, root.SamsaraApi.InlineResponse2006, root.SamsaraApi.InlineResponse2007, root.SamsaraApi.InlineResponse2008, root.SamsaraApi.MachineHistoryResponse, root.SamsaraApi.ReactivateDriverParam, root.SamsaraApi.SensorHistoryResponse, root.SamsaraApi.SensorParam, root.SamsaraApi.Tag, root.SamsaraApi.TagCreate, root.SamsaraApi.TagUpdate, root.SamsaraApi.TemperatureResponse, root.SamsaraApi.TripResponse, root.SamsaraApi.TripsParam, root.SamsaraApi.VehicleUpdateParam);
  }
}(this, function(ApiClient, AddressParam, AllRouteJobUpdates, AssetLocationResponse, AssetReeferResponse, CargoResponse, CurrentDriver, DataInputHistoryResponse, DispatchRoute, DispatchRouteCreate, DispatchRouteHistory, DispatchRoutes, DoorResponse, Driver, DriverDailyLogResponse, DriverForCreate, DriversResponse, DriversSummaryParam, DriversSummaryResponse, DvirListResponse, ErrorResponse, GroupDriversParam, GroupParam, HistoryParam, HistoryParam1, HosAuthenticationLogsParam, HosAuthenticationLogsResponse, HosLogsParam, HosLogsParam1, HosLogsParam2, HosLogsResponse, HosLogsSummaryResponse, HumidityResponse, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2006, InlineResponse2007, InlineResponse2008, MachineHistoryResponse, ReactivateDriverParam, SensorHistoryResponse, SensorParam, Tag, TagCreate, TagUpdate, TemperatureResponse, TripResponse, TripsParam, VehicleUpdateParam) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addFleetAddress operation.
     * @callback module:api/DefaultApi~addFleetAddressCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/add_address
     * This method adds an address book entry to the specified group.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/AddressParam} addressParam 
     * @param {module:api/DefaultApi~addFleetAddressCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addFleetAddress = function(accessToken, addressParam, callback) {
      var postBody = addressParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling addFleetAddress");
      }

      // verify the required parameter 'addressParam' is set
      if (addressParam === undefined || addressParam === null) {
        throw new Error("Missing the required parameter 'addressParam' when calling addFleetAddress");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/fleet/add_address', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createDispatchRoute operation.
     * @callback module:api/DefaultApi~createDispatchRouteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispatchRoute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/dispatch/routes
     * Create a new dispatch route.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/DispatchRouteCreate} createDispatchRouteParams 
     * @param {module:api/DefaultApi~createDispatchRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DispatchRoute}
     */
    this.createDispatchRoute = function(accessToken, createDispatchRouteParams, callback) {
      var postBody = createDispatchRouteParams;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling createDispatchRoute");
      }

      // verify the required parameter 'createDispatchRouteParams' is set
      if (createDispatchRouteParams === undefined || createDispatchRouteParams === null) {
        throw new Error("Missing the required parameter 'createDispatchRouteParams' when calling createDispatchRoute");
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
      var returnType = DispatchRoute;

      return this.apiClient.callApi(
        '/fleet/dispatch/routes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createDriver operation.
     * @callback module:api/DefaultApi~createDriverCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Driver} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/create
     * Create a new driver.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/DriverForCreate} createDriverParam Driver creation body
     * @param {module:api/DefaultApi~createDriverCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the createDriverDispatchRoute operation.
     * @callback module:api/DefaultApi~createDriverDispatchRouteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispatchRoute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/{driver_id:[0-9]+}/dispatch/routes
     * Create a new dispatch route for the driver with driver_id.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} driverId ID of the driver with the associated routes.
     * @param {module:model/DispatchRouteCreate} createDispatchRouteParams 
     * @param {module:api/DefaultApi~createDriverDispatchRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DispatchRoute}
     */
    this.createDriverDispatchRoute = function(accessToken, driverId, createDispatchRouteParams, callback) {
      var postBody = createDispatchRouteParams;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling createDriverDispatchRoute");
      }

      // verify the required parameter 'driverId' is set
      if (driverId === undefined || driverId === null) {
        throw new Error("Missing the required parameter 'driverId' when calling createDriverDispatchRoute");
      }

      // verify the required parameter 'createDispatchRouteParams' is set
      if (createDispatchRouteParams === undefined || createDispatchRouteParams === null) {
        throw new Error("Missing the required parameter 'createDispatchRouteParams' when calling createDriverDispatchRoute");
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
      var returnType = DispatchRoute;

      return this.apiClient.callApi(
        '/fleet/drivers/{driver_id}/dispatch/routes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createTag operation.
     * @callback module:api/DefaultApi~createTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /tags
     * Create a new tag for the group.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/TagCreate} tagCreateParams 
     * @param {module:api/DefaultApi~createTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */
    this.createTag = function(accessToken, tagCreateParams, callback) {
      var postBody = tagCreateParams;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling createTag");
      }

      // verify the required parameter 'tagCreateParams' is set
      if (tagCreateParams === undefined || tagCreateParams === null) {
        throw new Error("Missing the required parameter 'tagCreateParams' when calling createTag");
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
      var returnType = Tag;

      return this.apiClient.callApi(
        '/tags', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createVehicleDispatchRoute operation.
     * @callback module:api/DefaultApi~createVehicleDispatchRouteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispatchRoute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/vehicles/{vehicle_id:[0-9]+}/dispatch/routes
     * Create a new dispatch route for the vehicle with vehicle_id.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} vehicleId ID of the vehicle with the associated routes.
     * @param {module:model/DispatchRouteCreate} createDispatchRouteParams 
     * @param {module:api/DefaultApi~createVehicleDispatchRouteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DispatchRoute}
     */
    this.createVehicleDispatchRoute = function(accessToken, vehicleId, createDispatchRouteParams, callback) {
      var postBody = createDispatchRouteParams;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling createVehicleDispatchRoute");
      }

      // verify the required parameter 'vehicleId' is set
      if (vehicleId === undefined || vehicleId === null) {
        throw new Error("Missing the required parameter 'vehicleId' when calling createVehicleDispatchRoute");
      }

      // verify the required parameter 'createDispatchRouteParams' is set
      if (createDispatchRouteParams === undefined || createDispatchRouteParams === null) {
        throw new Error("Missing the required parameter 'createDispatchRouteParams' when calling createVehicleDispatchRoute");
      }


      var pathParams = {
        'vehicle_id': vehicleId
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
      var returnType = DispatchRoute;

      return this.apiClient.callApi(
        '/fleet/vehicles/{vehicle_id}/dispatch/routes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deactivateDriver operation.
     * @callback module:api/DefaultApi~deactivateDriverCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/{driver_id:[0-9]+}
     * Deactivate a driver with the given driver_id.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} driverId ID of the driver.
     * @param {module:api/DefaultApi~deactivateDriverCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the deleteDispatchRouteById operation.
     * @callback module:api/DefaultApi~deleteDispatchRouteByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/dispatch/routes/{route_id:[0-9]+}/
     * Delete a dispatch route and its associated jobs.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} routeId ID of the dispatch route.
     * @param {module:api/DefaultApi~deleteDispatchRouteByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteDispatchRouteById = function(accessToken, routeId, callback) {
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling deleteDispatchRouteById");
      }

      // verify the required parameter 'routeId' is set
      if (routeId === undefined || routeId === null) {
        throw new Error("Missing the required parameter 'routeId' when calling deleteDispatchRouteById");
      }


      var pathParams = {
        'route_id': routeId
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
        '/fleet/dispatch/routes/{route_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTagById operation.
     * @callback module:api/DefaultApi~deleteTagByIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /tags/{tag_id:[0-9]+}
     * Permanently deletes a tag.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} tagId ID of the tag.
     * @param {module:api/DefaultApi~deleteTagByIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTagById = function(accessToken, tagId, callback) {
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling deleteTagById");
      }

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling deleteTagById");
      }


      var pathParams = {
        'tag_id': tagId
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
        '/tags/{tag_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchAllDispatchRoutes operation.
     * @callback module:api/DefaultApi~fetchAllDispatchRoutesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispatchRoutes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/dispatch/routes
     * Fetch all of the dispatch routes for the group.
     * @param {String} accessToken Samsara API access token.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.groupId Optional group ID if the organization has multiple groups (uncommon).
     * @param {Number} opts.endTime Time in unix milliseconds that represents the oldest routes to return. Used in combination with duration. Defaults to now.
     * @param {Number} opts.duration Time in milliseconds that represents the duration before end_time to query. Defaults to 24 hours.
     * @param {module:api/DefaultApi~fetchAllDispatchRoutesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DispatchRoutes}
     */
    this.fetchAllDispatchRoutes = function(accessToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling fetchAllDispatchRoutes");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'group_id': opts['groupId'],
        'end_time': opts['endTime'],
        'duration': opts['duration'],
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
      var returnType = DispatchRoutes;

      return this.apiClient.callApi(
        '/fleet/dispatch/routes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fetchAllRouteJobUpdates operation.
     * @callback module:api/DefaultApi~fetchAllRouteJobUpdatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AllRouteJobUpdates} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/dispatch/routes/job_updates
     * Fetch all updates to a job including route data in the last 24 hours or subsequent to an sequence ID
     * @param {String} accessToken Samsara API access token.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.groupId Optional group ID if the organization has multiple groups (uncommon).
     * @param {String} opts.sequenceId Sequence ID from the response payload of the last request. Defaults to fetching updates from last 24 hours.
     * @param {String} opts.include Optionally set include&#x3D;route to include route object in response payload.
     * @param {module:api/DefaultApi~fetchAllRouteJobUpdatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AllRouteJobUpdates}
     */
    this.fetchAllRouteJobUpdates = function(accessToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling fetchAllRouteJobUpdates");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'group_id': opts['groupId'],
        'sequence_id': opts['sequenceId'],
        'include': opts['include'],
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
      var returnType = AllRouteJobUpdates;

      return this.apiClient.callApi(
        '/fleet/dispatch/routes/job_updates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllAssetCurrentLocations operation.
     * @callback module:api/DefaultApi~getAllAssetCurrentLocationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2008} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/assets/locations
     * Fetch current locations of all assets for the group.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/GroupParam} groupParam Group ID to query.
     * @param {module:api/DefaultApi~getAllAssetCurrentLocationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2008}
     */
    this.getAllAssetCurrentLocations = function(accessToken, groupParam, callback) {
      var postBody = groupParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getAllAssetCurrentLocations");
      }

      // verify the required parameter 'groupParam' is set
      if (groupParam === undefined || groupParam === null) {
        throw new Error("Missing the required parameter 'groupParam' when calling getAllAssetCurrentLocations");
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
      var returnType = InlineResponse2008;

      return this.apiClient.callApi(
        '/fleet/assets/locations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllAssets operation.
     * @callback module:api/DefaultApi~getAllAssetsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/assets
     * Fetch all of the assets for the group.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/GroupParam} groupParam Group ID to query.
     * @param {module:api/DefaultApi~getAllAssetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    this.getAllAssets = function(accessToken, groupParam, callback) {
      var postBody = groupParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getAllAssets");
      }

      // verify the required parameter 'groupParam' is set
      if (groupParam === undefined || groupParam === null) {
        throw new Error("Missing the required parameter 'groupParam' when calling getAllAssets");
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
      var returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/fleet/assets', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllDataInputs operation.
     * @callback module:api/DefaultApi~getAllDataInputsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /industrial/data
     * Fetch all of the data inputs for a group.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/GroupParam} groupParam Group ID to query.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startMs Timestamp in unix milliseconds representing the start of the period to fetch, inclusive. Used in combination with endMs. defaults to nowMs.
     * @param {Number} opts.endMs Timestamp in unix milliseconds representing the end of the period to fetch, inclusive. Used in combination with startMs. Defaults to nowMs.
     * @param {module:api/DefaultApi~getAllDataInputsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.getAllDataInputs = function(accessToken, groupParam, opts, callback) {
      opts = opts || {};
      var postBody = groupParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getAllDataInputs");
      }

      // verify the required parameter 'groupParam' is set
      if (groupParam === undefined || groupParam === null) {
        throw new Error("Missing the required parameter 'groupParam' when calling getAllDataInputs");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'startMs': opts['startMs'],
        'endMs': opts['endMs'],
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
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/industrial/data', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllDeactivatedDrivers operation.
     * @callback module:api/DefaultApi~getAllDeactivatedDriversCallback
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
     * @param {module:api/DefaultApi~getAllDeactivatedDriversCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getAllTags operation.
     * @callback module:api/DefaultApi~getAllTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /tags
     * Fetch all of the tags for a group.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/GroupParam} groupParam Group ID to query.
     * @param {module:api/DefaultApi~getAllTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.getAllTags = function(accessToken, groupParam, callback) {
      var postBody = groupParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getAllTags");
      }

      // verify the required parameter 'groupParam' is set
      if (groupParam === undefined || groupParam === null) {
        throw new Error("Missing the required parameter 'groupParam' when calling getAllTags");
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
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/tags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssetLocation operation.
     * @callback module:api/DefaultApi~getAssetLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetLocationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/assets/{assetId:[0-9]+}/locations
     * Fetch the historical locations for the asset.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} assetId ID of the asset
     * @param {Number} startMs Timestamp in milliseconds representing the start of the period to fetch, inclusive. Used in combination with endMs.
     * @param {Number} endMs Timestamp in milliseconds representing the end of the period to fetch, inclusive. Used in combination with startMs.
     * @param {module:api/DefaultApi~getAssetLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetLocationResponse}
     */
    this.getAssetLocation = function(accessToken, assetId, startMs, endMs, callback) {
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getAssetLocation");
      }

      // verify the required parameter 'assetId' is set
      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling getAssetLocation");
      }

      // verify the required parameter 'startMs' is set
      if (startMs === undefined || startMs === null) {
        throw new Error("Missing the required parameter 'startMs' when calling getAssetLocation");
      }

      // verify the required parameter 'endMs' is set
      if (endMs === undefined || endMs === null) {
        throw new Error("Missing the required parameter 'endMs' when calling getAssetLocation");
      }


      var pathParams = {
        'asset_id': assetId
      };
      var queryParams = {
        'access_token': accessToken,
        'startMs': startMs,
        'endMs': endMs,
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
      var returnType = AssetLocationResponse;

      return this.apiClient.callApi(
        '/fleet/assets/{asset_id}/locations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssetReefer operation.
     * @callback module:api/DefaultApi~getAssetReeferCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssetReeferResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/assets/{assetId:[0-9]+}/reefer
     * Fetch the reefer-specific stats of an asset.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} assetId ID of the asset
     * @param {Number} startMs Timestamp in milliseconds representing the start of the period to fetch, inclusive. Used in combination with endMs.
     * @param {Number} endMs Timestamp in milliseconds representing the end of the period to fetch, inclusive. Used in combination with startMs.
     * @param {module:api/DefaultApi~getAssetReeferCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssetReeferResponse}
     */
    this.getAssetReefer = function(accessToken, assetId, startMs, endMs, callback) {
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getAssetReefer");
      }

      // verify the required parameter 'assetId' is set
      if (assetId === undefined || assetId === null) {
        throw new Error("Missing the required parameter 'assetId' when calling getAssetReefer");
      }

      // verify the required parameter 'startMs' is set
      if (startMs === undefined || startMs === null) {
        throw new Error("Missing the required parameter 'startMs' when calling getAssetReefer");
      }

      // verify the required parameter 'endMs' is set
      if (endMs === undefined || endMs === null) {
        throw new Error("Missing the required parameter 'endMs' when calling getAssetReefer");
      }


      var pathParams = {
        'asset_id': assetId
      };
      var queryParams = {
        'access_token': accessToken,
        'startMs': startMs,
        'endMs': endMs,
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
      var returnType = AssetReeferResponse;

      return this.apiClient.callApi(
        '/fleet/assets/{asset_id}/reefer', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDataInput operation.
     * @callback module:api/DefaultApi~getDataInputCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataInputHistoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /industrial/data/{data_input_id:[0-9]+}
     * Fetch datapoints from a given data input.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} dataInputId ID of the data input
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startMs Timestamp in unix milliseconds representing the start of the period to fetch, inclusive. Used in combination with endMs. defaults to nowMs.
     * @param {Number} opts.endMs Timestamp in unix milliseconds representing the end of the period to fetch, inclusive. Used in combination with startMs. Defaults to nowMs.
     * @param {module:api/DefaultApi~getDataInputCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataInputHistoryResponse}
     */
    this.getDataInput = function(accessToken, dataInputId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getDataInput");
      }

      // verify the required parameter 'dataInputId' is set
      if (dataInputId === undefined || dataInputId === null) {
        throw new Error("Missing the required parameter 'dataInputId' when calling getDataInput");
      }


      var pathParams = {
        'data_input_id': dataInputId
      };
      var queryParams = {
        'access_token': accessToken,
        'startMs': opts['startMs'],
        'endMs': opts['endMs'],
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
      var returnType = DataInputHistoryResponse;

      return this.apiClient.callApi(
        '/industrial/data/{data_input_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeactivatedDriverById operation.
     * @callback module:api/DefaultApi~getDeactivatedDriverByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Driver} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/inactive/{driver_id:[0-9]+}
     * Fetch deactivated driver by driver_id.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} driverId ID of the deactivated driver.
     * @param {module:api/DefaultApi~getDeactivatedDriverByIdCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getDispatchRouteById operation.
     * @callback module:api/DefaultApi~getDispatchRouteByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispatchRoute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/dispatch/routes/{route_id:[0-9]+}
     * Fetch a dispatch route by id.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} routeId ID of the dispatch route.
     * @param {module:api/DefaultApi~getDispatchRouteByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DispatchRoute}
     */
    this.getDispatchRouteById = function(accessToken, routeId, callback) {
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getDispatchRouteById");
      }

      // verify the required parameter 'routeId' is set
      if (routeId === undefined || routeId === null) {
        throw new Error("Missing the required parameter 'routeId' when calling getDispatchRouteById");
      }


      var pathParams = {
        'route_id': routeId
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
      var returnType = DispatchRoute;

      return this.apiClient.callApi(
        '/fleet/dispatch/routes/{route_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDispatchRouteHistory operation.
     * @callback module:api/DefaultApi~getDispatchRouteHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispatchRouteHistory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/dispatch/routes/{route_id:[0-9]+}/history
     * Fetch the history of a dispatch route.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} routeId ID of the route with history.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startTime Timestamp representing the start of the period to fetch, inclusive. Used in combination with end_time. Defaults to 0.
     * @param {Number} opts.endTime Timestamp representing the end of the period to fetch, inclusive. Used in combination with start_time. Defaults to nowMs.
     * @param {module:api/DefaultApi~getDispatchRouteHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DispatchRouteHistory}
     */
    this.getDispatchRouteHistory = function(accessToken, routeId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getDispatchRouteHistory");
      }

      // verify the required parameter 'routeId' is set
      if (routeId === undefined || routeId === null) {
        throw new Error("Missing the required parameter 'routeId' when calling getDispatchRouteHistory");
      }


      var pathParams = {
        'route_id': routeId
      };
      var queryParams = {
        'access_token': accessToken,
        'start_time': opts['startTime'],
        'end_time': opts['endTime'],
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
      var returnType = DispatchRouteHistory;

      return this.apiClient.callApi(
        '/fleet/dispatch/routes/{route_id}/history', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDispatchRoutesByDriverId operation.
     * @callback module:api/DefaultApi~getDispatchRoutesByDriverIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispatchRoutes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/{driver_id:[0-9]+}/dispatch/routes
     * Fetch all of the dispatch routes for a given driver.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} driverId ID of the driver with the associated routes.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.endTime Time in unix milliseconds that represents the oldest routes to return. Used in combination with duration. Defaults to now.
     * @param {Number} opts.duration Time in milliseconds that represents the duration before end_time to query. Defaults to 24 hours.
     * @param {module:api/DefaultApi~getDispatchRoutesByDriverIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DispatchRoutes}
     */
    this.getDispatchRoutesByDriverId = function(accessToken, driverId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getDispatchRoutesByDriverId");
      }

      // verify the required parameter 'driverId' is set
      if (driverId === undefined || driverId === null) {
        throw new Error("Missing the required parameter 'driverId' when calling getDispatchRoutesByDriverId");
      }


      var pathParams = {
        'driver_id': driverId
      };
      var queryParams = {
        'access_token': accessToken,
        'end_time': opts['endTime'],
        'duration': opts['duration'],
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
      var returnType = DispatchRoutes;

      return this.apiClient.callApi(
        '/fleet/drivers/{driver_id}/dispatch/routes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDispatchRoutesByVehicleId operation.
     * @callback module:api/DefaultApi~getDispatchRoutesByVehicleIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispatchRoutes} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/vehicles/{vehicle_id:[0-9]+}/dispatch/routes
     * Fetch all of the dispatch routes for a given vehicle.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} vehicleId ID of the vehicle with the associated routes.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.endTime Time in unix milliseconds that represents the oldest routes to return. Used in combination with duration. Defaults to now.
     * @param {Number} opts.duration Time in milliseconds that represents the duration before end_time to query. Defaults to 24 hours.
     * @param {module:api/DefaultApi~getDispatchRoutesByVehicleIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DispatchRoutes}
     */
    this.getDispatchRoutesByVehicleId = function(accessToken, vehicleId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getDispatchRoutesByVehicleId");
      }

      // verify the required parameter 'vehicleId' is set
      if (vehicleId === undefined || vehicleId === null) {
        throw new Error("Missing the required parameter 'vehicleId' when calling getDispatchRoutesByVehicleId");
      }


      var pathParams = {
        'vehicle_id': vehicleId
      };
      var queryParams = {
        'access_token': accessToken,
        'end_time': opts['endTime'],
        'duration': opts['duration'],
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
      var returnType = DispatchRoutes;

      return this.apiClient.callApi(
        '/fleet/vehicles/{vehicle_id}/dispatch/routes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDriverById operation.
     * @callback module:api/DefaultApi~getDriverByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrentDriver} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/{driver_id:[0-9]+}
     * Fetch driver by id.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} driverId ID of the driver.
     * @param {module:api/DefaultApi~getDriverByIdCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getDvirs operation.
     * @callback module:api/DefaultApi~getDvirsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DvirListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/maintenance/dvirs
     * Get the DVIR for the org with the time constraints
     * @param {String} accessToken Samsara API access token.
     * @param {Number} endMs time in millis until the last dvir log.
     * @param {Number} durationMs time in millis which corresponds to the duration before the end_ms.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.groupId Group ID to query.
     * @param {module:api/DefaultApi~getDvirsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DvirListResponse}
     */
    this.getDvirs = function(accessToken, endMs, durationMs, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getDvirs");
      }

      // verify the required parameter 'endMs' is set
      if (endMs === undefined || endMs === null) {
        throw new Error("Missing the required parameter 'endMs' when calling getDvirs");
      }

      // verify the required parameter 'durationMs' is set
      if (durationMs === undefined || durationMs === null) {
        throw new Error("Missing the required parameter 'durationMs' when calling getDvirs");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'end_ms': endMs,
        'duration_ms': durationMs,
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
      var returnType = DvirListResponse;

      return this.apiClient.callApi(
        '/fleet/maintenance/dvirs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFleet operation.
     * @callback module:api/DefaultApi~getFleetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/list
     * Get list of the vehicles. This method returns a list of the vehicles in the Samsara Cloud and information about them.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/GroupParam} groupParam Group ID to query.
     * @param {module:api/DefaultApi~getFleetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.getFleet = function(accessToken, groupParam, callback) {
      var postBody = groupParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getFleet");
      }

      // verify the required parameter 'groupParam' is set
      if (groupParam === undefined || groupParam === null) {
        throw new Error("Missing the required parameter 'groupParam' when calling getFleet");
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
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/fleet/list', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFleetDrivers operation.
     * @callback module:api/DefaultApi~getFleetDriversCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DriversResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers
     * Get all the drivers for the specified group.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/GroupDriversParam} groupDriversParam 
     * @param {module:api/DefaultApi~getFleetDriversCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DriversResponse}
     */
    this.getFleetDrivers = function(accessToken, groupDriversParam, callback) {
      var postBody = groupDriversParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getFleetDrivers");
      }

      // verify the required parameter 'groupDriversParam' is set
      if (groupDriversParam === undefined || groupDriversParam === null) {
        throw new Error("Missing the required parameter 'groupDriversParam' when calling getFleetDrivers");
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
      var returnType = DriversResponse;

      return this.apiClient.callApi(
        '/fleet/drivers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFleetDriversHosDailyLogs operation.
     * @callback module:api/DefaultApi~getFleetDriversHosDailyLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DriverDailyLogResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/{driver_id:[0-9]+}/hos_daily_logs
     * Get summarized daily HOS charts for a specified driver.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} driverId ID of the driver with HOS logs.
     * @param {module:model/HosLogsParam} hosLogsParam 
     * @param {module:api/DefaultApi~getFleetDriversHosDailyLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DriverDailyLogResponse}
     */
    this.getFleetDriversHosDailyLogs = function(accessToken, driverId, hosLogsParam, callback) {
      var postBody = hosLogsParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getFleetDriversHosDailyLogs");
      }

      // verify the required parameter 'driverId' is set
      if (driverId === undefined || driverId === null) {
        throw new Error("Missing the required parameter 'driverId' when calling getFleetDriversHosDailyLogs");
      }

      // verify the required parameter 'hosLogsParam' is set
      if (hosLogsParam === undefined || hosLogsParam === null) {
        throw new Error("Missing the required parameter 'hosLogsParam' when calling getFleetDriversHosDailyLogs");
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
      var returnType = DriverDailyLogResponse;

      return this.apiClient.callApi(
        '/fleet/drivers/{driver_id}/hos_daily_logs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFleetDriversSummary operation.
     * @callback module:api/DefaultApi~getFleetDriversSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DriversSummaryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/drivers/summary
     * Get the distance and time each driver in an organization has driven in a given time period.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/DriversSummaryParam} driversSummaryParam Org ID and time range to query.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.snapToDayBounds Snap query result to HOS day boundaries.
     * @param {module:api/DefaultApi~getFleetDriversSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DriversSummaryResponse}
     */
    this.getFleetDriversSummary = function(accessToken, driversSummaryParam, opts, callback) {
      opts = opts || {};
      var postBody = driversSummaryParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getFleetDriversSummary");
      }

      // verify the required parameter 'driversSummaryParam' is set
      if (driversSummaryParam === undefined || driversSummaryParam === null) {
        throw new Error("Missing the required parameter 'driversSummaryParam' when calling getFleetDriversSummary");
      }


      var pathParams = {
      };
      var queryParams = {
        'access_token': accessToken,
        'snap_to_day_bounds': opts['snapToDayBounds'],
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
      var returnType = DriversSummaryResponse;

      return this.apiClient.callApi(
        '/fleet/drivers/summary', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFleetHosAuthenticationLogs operation.
     * @callback module:api/DefaultApi~getFleetHosAuthenticationLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HosAuthenticationLogsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/hos_authentication_logs
     * Get the HOS (hours of service) signin and signout logs for the specified driver. Only signout logs include location information.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/HosAuthenticationLogsParam} hosAuthenticationLogsParam 
     * @param {module:api/DefaultApi~getFleetHosAuthenticationLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HosAuthenticationLogsResponse}
     */
    this.getFleetHosAuthenticationLogs = function(accessToken, hosAuthenticationLogsParam, callback) {
      var postBody = hosAuthenticationLogsParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getFleetHosAuthenticationLogs");
      }

      // verify the required parameter 'hosAuthenticationLogsParam' is set
      if (hosAuthenticationLogsParam === undefined || hosAuthenticationLogsParam === null) {
        throw new Error("Missing the required parameter 'hosAuthenticationLogsParam' when calling getFleetHosAuthenticationLogs");
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
      var returnType = HosAuthenticationLogsResponse;

      return this.apiClient.callApi(
        '/fleet/hos_authentication_logs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFleetHosLogs operation.
     * @callback module:api/DefaultApi~getFleetHosLogsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HosLogsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/hos_logs
     * Get the HOS (hours of service) logs for the specified driver.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/HosLogsParam1} hosLogsParam 
     * @param {module:api/DefaultApi~getFleetHosLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HosLogsResponse}
     */
    this.getFleetHosLogs = function(accessToken, hosLogsParam, callback) {
      var postBody = hosLogsParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getFleetHosLogs");
      }

      // verify the required parameter 'hosLogsParam' is set
      if (hosLogsParam === undefined || hosLogsParam === null) {
        throw new Error("Missing the required parameter 'hosLogsParam' when calling getFleetHosLogs");
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
      var returnType = HosLogsResponse;

      return this.apiClient.callApi(
        '/fleet/hos_logs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFleetHosLogsSummary operation.
     * @callback module:api/DefaultApi~getFleetHosLogsSummaryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HosLogsSummaryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/hos_logs_summary
     * Get the current HOS status for all drivers in the group.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/HosLogsParam2} hosLogsParam 
     * @param {module:api/DefaultApi~getFleetHosLogsSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HosLogsSummaryResponse}
     */
    this.getFleetHosLogsSummary = function(accessToken, hosLogsParam, callback) {
      var postBody = hosLogsParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getFleetHosLogsSummary");
      }

      // verify the required parameter 'hosLogsParam' is set
      if (hosLogsParam === undefined || hosLogsParam === null) {
        throw new Error("Missing the required parameter 'hosLogsParam' when calling getFleetHosLogsSummary");
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
      var returnType = HosLogsSummaryResponse;

      return this.apiClient.callApi(
        '/fleet/hos_logs_summary', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFleetLocations operation.
     * @callback module:api/DefaultApi~getFleetLocationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/locations
     * Get current location of vehicles in a group. This method returns the current location in latitude and longitude of all vehicles in a requested group.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/GroupParam} groupParam Group ID to query.
     * @param {module:api/DefaultApi~getFleetLocationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    this.getFleetLocations = function(accessToken, groupParam, callback) {
      var postBody = groupParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getFleetLocations");
      }

      // verify the required parameter 'groupParam' is set
      if (groupParam === undefined || groupParam === null) {
        throw new Error("Missing the required parameter 'groupParam' when calling getFleetLocations");
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
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/fleet/locations', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFleetMaintenanceList operation.
     * @callback module:api/DefaultApi~getFleetMaintenanceListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/maintenance/list
     * Get list of the vehicles with any engine faults or check light data.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/GroupParam} groupParam Group ID to query.
     * @param {module:api/DefaultApi~getFleetMaintenanceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.getFleetMaintenanceList = function(accessToken, groupParam, callback) {
      var postBody = groupParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getFleetMaintenanceList");
      }

      // verify the required parameter 'groupParam' is set
      if (groupParam === undefined || groupParam === null) {
        throw new Error("Missing the required parameter 'groupParam' when calling getFleetMaintenanceList");
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
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/fleet/maintenance/list', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFleetTrips operation.
     * @callback module:api/DefaultApi~getFleetTripsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TripResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/trips
     * Get historical trips data for specified vehicle. This method returns a set of historical trips data for the specified vehicle in the specified time range.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/TripsParam} tripsParam Group ID, vehicle ID and time range to query.
     * @param {module:api/DefaultApi~getFleetTripsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TripResponse}
     */
    this.getFleetTrips = function(accessToken, tripsParam, callback) {
      var postBody = tripsParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getFleetTrips");
      }

      // verify the required parameter 'tripsParam' is set
      if (tripsParam === undefined || tripsParam === null) {
        throw new Error("Missing the required parameter 'tripsParam' when calling getFleetTrips");
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
      var returnType = TripResponse;

      return this.apiClient.callApi(
        '/fleet/trips', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMachines operation.
     * @callback module:api/DefaultApi~getMachinesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /machines/list
     * Get machine objects. This method returns a list of the machine objects in the Samsara Cloud and information about them.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/GroupParam} groupParam Group ID to query.
     * @param {module:api/DefaultApi~getMachinesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.getMachines = function(accessToken, groupParam, callback) {
      var postBody = groupParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getMachines");
      }

      // verify the required parameter 'groupParam' is set
      if (groupParam === undefined || groupParam === null) {
        throw new Error("Missing the required parameter 'groupParam' when calling getMachines");
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
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/machines/list', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMachinesHistory operation.
     * @callback module:api/DefaultApi~getMachinesHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MachineHistoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /machines/history
     * Get historical data for machine objects. This method returns a set of historical data for all machines in a group
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/HistoryParam1} historyParam Group ID and time range to query for events
     * @param {module:api/DefaultApi~getMachinesHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MachineHistoryResponse}
     */
    this.getMachinesHistory = function(accessToken, historyParam, callback) {
      var postBody = historyParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getMachinesHistory");
      }

      // verify the required parameter 'historyParam' is set
      if (historyParam === undefined || historyParam === null) {
        throw new Error("Missing the required parameter 'historyParam' when calling getMachinesHistory");
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
      var returnType = MachineHistoryResponse;

      return this.apiClient.callApi(
        '/machines/history', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSensors operation.
     * @callback module:api/DefaultApi~getSensorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /sensors/list
     * Get sensor objects. This method returns a list of the sensor objects in the Samsara Cloud and information about them.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/GroupParam} groupParam Group ID to query.
     * @param {module:api/DefaultApi~getSensorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.getSensors = function(accessToken, groupParam, callback) {
      var postBody = groupParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getSensors");
      }

      // verify the required parameter 'groupParam' is set
      if (groupParam === undefined || groupParam === null) {
        throw new Error("Missing the required parameter 'groupParam' when calling getSensors");
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
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/sensors/list', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSensorsCargo operation.
     * @callback module:api/DefaultApi~getSensorsCargoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CargoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /sensors/cargo
     * Get cargo monitor status (empty / full) for requested sensors.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/SensorParam} sensorParam Group ID and list of sensor IDs to query.
     * @param {module:api/DefaultApi~getSensorsCargoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CargoResponse}
     */
    this.getSensorsCargo = function(accessToken, sensorParam, callback) {
      var postBody = sensorParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getSensorsCargo");
      }

      // verify the required parameter 'sensorParam' is set
      if (sensorParam === undefined || sensorParam === null) {
        throw new Error("Missing the required parameter 'sensorParam' when calling getSensorsCargo");
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
      var returnType = CargoResponse;

      return this.apiClient.callApi(
        '/sensors/cargo', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSensorsDoor operation.
     * @callback module:api/DefaultApi~getSensorsDoorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DoorResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /sensors/door
     * Get door monitor status (closed / open) for requested sensors.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/SensorParam} sensorParam Group ID and list of sensor IDs to query.
     * @param {module:api/DefaultApi~getSensorsDoorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DoorResponse}
     */
    this.getSensorsDoor = function(accessToken, sensorParam, callback) {
      var postBody = sensorParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getSensorsDoor");
      }

      // verify the required parameter 'sensorParam' is set
      if (sensorParam === undefined || sensorParam === null) {
        throw new Error("Missing the required parameter 'sensorParam' when calling getSensorsDoor");
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
      var returnType = DoorResponse;

      return this.apiClient.callApi(
        '/sensors/door', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSensorsHistory operation.
     * @callback module:api/DefaultApi~getSensorsHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SensorHistoryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /sensors/history
     * Get historical data for specified sensors. This method returns a set of historical data for the specified sensors in the specified time range and at the specified time resolution.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/HistoryParam} historyParam Group ID, time range and resolution, and list of sensor ID, field pairs to query.
     * @param {module:api/DefaultApi~getSensorsHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SensorHistoryResponse}
     */
    this.getSensorsHistory = function(accessToken, historyParam, callback) {
      var postBody = historyParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getSensorsHistory");
      }

      // verify the required parameter 'historyParam' is set
      if (historyParam === undefined || historyParam === null) {
        throw new Error("Missing the required parameter 'historyParam' when calling getSensorsHistory");
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
      var returnType = SensorHistoryResponse;

      return this.apiClient.callApi(
        '/sensors/history', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSensorsHumidity operation.
     * @callback module:api/DefaultApi~getSensorsHumidityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HumidityResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /sensors/humidity
     * Get humidity for requested sensors. This method returns the current relative humidity for the requested sensors.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/SensorParam} sensorParam Group ID and list of sensor IDs to query.
     * @param {module:api/DefaultApi~getSensorsHumidityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HumidityResponse}
     */
    this.getSensorsHumidity = function(accessToken, sensorParam, callback) {
      var postBody = sensorParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getSensorsHumidity");
      }

      // verify the required parameter 'sensorParam' is set
      if (sensorParam === undefined || sensorParam === null) {
        throw new Error("Missing the required parameter 'sensorParam' when calling getSensorsHumidity");
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
      var returnType = HumidityResponse;

      return this.apiClient.callApi(
        '/sensors/humidity', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSensorsTemperature operation.
     * @callback module:api/DefaultApi~getSensorsTemperatureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemperatureResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /sensors/temperature
     * Get temperature for requested sensors. This method returns the current ambient temperature (and probe temperature if applicable) for the requested sensors.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/SensorParam} sensorParam Group ID and list of sensor IDs to query.
     * @param {module:api/DefaultApi~getSensorsTemperatureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemperatureResponse}
     */
    this.getSensorsTemperature = function(accessToken, sensorParam, callback) {
      var postBody = sensorParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getSensorsTemperature");
      }

      // verify the required parameter 'sensorParam' is set
      if (sensorParam === undefined || sensorParam === null) {
        throw new Error("Missing the required parameter 'sensorParam' when calling getSensorsTemperature");
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
      var returnType = TemperatureResponse;

      return this.apiClient.callApi(
        '/sensors/temperature', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTagById operation.
     * @callback module:api/DefaultApi~getTagByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /tags/{tag_id:[0-9]+}
     * Fetch a tag by id.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} tagId ID of the tag.
     * @param {module:api/DefaultApi~getTagByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */
    this.getTagById = function(accessToken, tagId, callback) {
      var postBody = null;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling getTagById");
      }

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling getTagById");
      }


      var pathParams = {
        'tag_id': tagId
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
      var returnType = Tag;

      return this.apiClient.callApi(
        '/tags/{tag_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reactivateDriverById operation.
     * @callback module:api/DefaultApi~reactivateDriverByIdCallback
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
     * @param {module:api/DefaultApi~reactivateDriverByIdCallback} callback The callback function, accepting three arguments: error, data, response
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

    /**
     * Callback function to receive the result of the updateDispatchRouteById operation.
     * @callback module:api/DefaultApi~updateDispatchRouteByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DispatchRoute} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/dispatch/routes/{route_id:[0-9]+}/
     * Update a dispatch route and its associated jobs.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} routeId ID of the dispatch route.
     * @param {module:model/DispatchRoute} updateDispatchRouteParams 
     * @param {module:api/DefaultApi~updateDispatchRouteByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DispatchRoute}
     */
    this.updateDispatchRouteById = function(accessToken, routeId, updateDispatchRouteParams, callback) {
      var postBody = updateDispatchRouteParams;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling updateDispatchRouteById");
      }

      // verify the required parameter 'routeId' is set
      if (routeId === undefined || routeId === null) {
        throw new Error("Missing the required parameter 'routeId' when calling updateDispatchRouteById");
      }

      // verify the required parameter 'updateDispatchRouteParams' is set
      if (updateDispatchRouteParams === undefined || updateDispatchRouteParams === null) {
        throw new Error("Missing the required parameter 'updateDispatchRouteParams' when calling updateDispatchRouteById");
      }


      var pathParams = {
        'route_id': routeId
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
      var returnType = DispatchRoute;

      return this.apiClient.callApi(
        '/fleet/dispatch/routes/{route_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTagById operation.
     * @callback module:api/DefaultApi~updateTagByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /tags/{tag_id:[0-9]+}
     * Update a tag with a new name and new members. This API call would replace all old members of a tag with new members specified in the request body.
     * @param {String} accessToken Samsara API access token.
     * @param {Number} tagId ID of the tag.
     * @param {module:model/TagUpdate} updateTagParams 
     * @param {module:api/DefaultApi~updateTagByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */
    this.updateTagById = function(accessToken, tagId, updateTagParams, callback) {
      var postBody = updateTagParams;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling updateTagById");
      }

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling updateTagById");
      }

      // verify the required parameter 'updateTagParams' is set
      if (updateTagParams === undefined || updateTagParams === null) {
        throw new Error("Missing the required parameter 'updateTagParams' when calling updateTagById");
      }


      var pathParams = {
        'tag_id': tagId
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
      var returnType = Tag;

      return this.apiClient.callApi(
        '/tags/{tag_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVehicles operation.
     * @callback module:api/DefaultApi~updateVehiclesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /fleet/set_data
     * This method enables the mutation of metadata for vehicles in the Samsara Cloud.
     * @param {String} accessToken Samsara API access token.
     * @param {module:model/VehicleUpdateParam} vehicleUpdateParam 
     * @param {module:api/DefaultApi~updateVehiclesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateVehicles = function(accessToken, vehicleUpdateParam, callback) {
      var postBody = vehicleUpdateParam;

      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling updateVehicles");
      }

      // verify the required parameter 'vehicleUpdateParam' is set
      if (vehicleUpdateParam === undefined || vehicleUpdateParam === null) {
        throw new Error("Missing the required parameter 'vehicleUpdateParam' when calling updateVehicles");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/fleet/set_data', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
