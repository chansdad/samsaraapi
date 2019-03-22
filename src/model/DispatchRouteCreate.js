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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SamsaraApi) {
      root.SamsaraApi = {};
    }
    root.SamsaraApi.DispatchRouteCreate = factory(root.SamsaraApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DispatchRouteCreate model module.
   * @module model/DispatchRouteCreate
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DispatchRouteCreate</code>.
   * @alias module:model/DispatchRouteCreate
   * @class
   * @param scheduledStartMs {Number} The time in Unix epoch milliseconds that the route is scheduled to start.
   * @param scheduledEndMs {Number} The time in Unix epoch milliseconds that the last job in the route is scheduled to end.
   * @param name {String} Descriptive name of this route.
   * @param startLocationLat {Number} Latitude of the destination in decimal degrees.
   * @param startLocationLng {Number} Latitude of the destination in decimal degrees.
   */
  var exports = function(scheduledStartMs, scheduledEndMs, name, startLocationLat, startLocationLng) {
    var _this = this;



    _this['scheduled_start_ms'] = scheduledStartMs;
    _this['scheduled_end_ms'] = scheduledEndMs;
    _this['name'] = name;



    _this['start_location_lat'] = startLocationLat;
    _this['start_location_lng'] = startLocationLng;
  };

  /**
   * Constructs a <code>DispatchRouteCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DispatchRouteCreate} obj Optional instance to populate.
   * @return {module:model/DispatchRouteCreate} The populated <code>DispatchRouteCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('vehicle_id')) {
        obj['vehicle_id'] = ApiClient.convertToType(data['vehicle_id'], 'Number');
      }
      if (data.hasOwnProperty('driver_id')) {
        obj['driver_id'] = ApiClient.convertToType(data['driver_id'], 'Number');
      }
      if (data.hasOwnProperty('scheduled_start_ms')) {
        obj['scheduled_start_ms'] = ApiClient.convertToType(data['scheduled_start_ms'], 'Number');
      }
      if (data.hasOwnProperty('scheduled_end_ms')) {
        obj['scheduled_end_ms'] = ApiClient.convertToType(data['scheduled_end_ms'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
      if (data.hasOwnProperty('start_location_name')) {
        obj['start_location_name'] = ApiClient.convertToType(data['start_location_name'], 'String');
      }
      if (data.hasOwnProperty('start_location_address')) {
        obj['start_location_address'] = ApiClient.convertToType(data['start_location_address'], 'String');
      }
      if (data.hasOwnProperty('start_location_lat')) {
        obj['start_location_lat'] = ApiClient.convertToType(data['start_location_lat'], 'Number');
      }
      if (data.hasOwnProperty('start_location_lng')) {
        obj['start_location_lng'] = ApiClient.convertToType(data['start_location_lng'], 'Number');
      }
    }
    return obj;
  }

  /**
   * ID of the vehicle assigned to the dispatch route. Note that vehicle_id and driver_id are mutually exclusive. If neither is specified, then the route is unassigned.
   * @member {Number} vehicle_id
   */
  exports.prototype['vehicle_id'] = undefined;
  /**
   * ID of the driver assigned to the dispatch route. Note that driver_id and vehicle_id are mutually exclusive. If neither is specified, then the route is unassigned.
   * @member {Number} driver_id
   */
  exports.prototype['driver_id'] = undefined;
  /**
   * The time in Unix epoch milliseconds that the route is scheduled to start.
   * @member {Number} scheduled_start_ms
   */
  exports.prototype['scheduled_start_ms'] = undefined;
  /**
   * The time in Unix epoch milliseconds that the last job in the route is scheduled to end.
   * @member {Number} scheduled_end_ms
   */
  exports.prototype['scheduled_end_ms'] = undefined;
  /**
   * Descriptive name of this route.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * ID of the group if the organization has multiple groups (optional).
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * The name of the route's starting location.
   * @member {String} start_location_name
   */
  exports.prototype['start_location_name'] = undefined;
  /**
   * The address of the route's starting location, as it would be recognized if provided to maps.google.com
   * @member {String} start_location_address
   */
  exports.prototype['start_location_address'] = undefined;
  /**
   * Latitude of the destination in decimal degrees.
   * @member {Number} start_location_lat
   */
  exports.prototype['start_location_lat'] = undefined;
  /**
   * Latitude of the destination in decimal degrees.
   * @member {Number} start_location_lng
   */
  exports.prototype['start_location_lng'] = undefined;



  return exports;
}));


