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
    define(['ApiClient', 'model/TripResponseEndCoordinates', 'model/TripResponseStartCoordinates'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TripResponseEndCoordinates'), require('./TripResponseStartCoordinates'));
  } else {
    // Browser globals (root is window)
    if (!root.SamsaraApi) {
      root.SamsaraApi = {};
    }
    root.SamsaraApi.TripResponseTrips = factory(root.SamsaraApi.ApiClient, root.SamsaraApi.TripResponseEndCoordinates, root.SamsaraApi.TripResponseStartCoordinates);
  }
}(this, function(ApiClient, TripResponseEndCoordinates, TripResponseStartCoordinates) {
  'use strict';




  /**
   * The TripResponseTrips model module.
   * @module model/TripResponseTrips
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TripResponseTrips</code>.
   * @alias module:model/TripResponseTrips
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>TripResponseTrips</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TripResponseTrips} obj Optional instance to populate.
   * @return {module:model/TripResponseTrips} The populated <code>TripResponseTrips</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('startMs')) {
        obj['startMs'] = ApiClient.convertToType(data['startMs'], 'Number');
      }
      if (data.hasOwnProperty('startCoordinates')) {
        obj['startCoordinates'] = TripResponseStartCoordinates.constructFromObject(data['startCoordinates']);
      }
      if (data.hasOwnProperty('startLocation')) {
        obj['startLocation'] = ApiClient.convertToType(data['startLocation'], 'String');
      }
      if (data.hasOwnProperty('endMs')) {
        obj['endMs'] = ApiClient.convertToType(data['endMs'], 'Number');
      }
      if (data.hasOwnProperty('endCoordinates')) {
        obj['endCoordinates'] = TripResponseEndCoordinates.constructFromObject(data['endCoordinates']);
      }
      if (data.hasOwnProperty('endLocation')) {
        obj['endLocation'] = ApiClient.convertToType(data['endLocation'], 'String');
      }
      if (data.hasOwnProperty('distanceMeters')) {
        obj['distanceMeters'] = ApiClient.convertToType(data['distanceMeters'], 'Number');
      }
      if (data.hasOwnProperty('fuelConsumedMl')) {
        obj['fuelConsumedMl'] = ApiClient.convertToType(data['fuelConsumedMl'], 'Number');
      }
      if (data.hasOwnProperty('tollMeters')) {
        obj['tollMeters'] = ApiClient.convertToType(data['tollMeters'], 'Number');
      }
      if (data.hasOwnProperty('driverId')) {
        obj['driverId'] = ApiClient.convertToType(data['driverId'], 'Number');
      }
      if (data.hasOwnProperty('startOdometer')) {
        obj['startOdometer'] = ApiClient.convertToType(data['startOdometer'], 'Number');
      }
      if (data.hasOwnProperty('endOdometer')) {
        obj['endOdometer'] = ApiClient.convertToType(data['endOdometer'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Beginning of the trip in UNIX milliseconds.
   * @member {Number} startMs
   */
  exports.prototype['startMs'] = undefined;
  /**
   * @member {module:model/TripResponseStartCoordinates} startCoordinates
   */
  exports.prototype['startCoordinates'] = undefined;
  /**
   * Text representation of nearest identifiable location to the start (latitude, longitude) coordinates.
   * @member {String} startLocation
   */
  exports.prototype['startLocation'] = undefined;
  /**
   * End of the trip in UNIX milliseconds.
   * @member {Number} endMs
   */
  exports.prototype['endMs'] = undefined;
  /**
   * @member {module:model/TripResponseEndCoordinates} endCoordinates
   */
  exports.prototype['endCoordinates'] = undefined;
  /**
   * Text representation of nearest identifiable location to the end (latitude, longitude) coordinates.
   * @member {String} endLocation
   */
  exports.prototype['endLocation'] = undefined;
  /**
   * Length of the trip in meters.
   * @member {Number} distanceMeters
   */
  exports.prototype['distanceMeters'] = undefined;
  /**
   * Amount in milliliters of fuel consumed on this trip.
   * @member {Number} fuelConsumedMl
   */
  exports.prototype['fuelConsumedMl'] = undefined;
  /**
   * Length in meters trip spent on toll roads.
   * @member {Number} tollMeters
   */
  exports.prototype['tollMeters'] = undefined;
  /**
   * ID of the driver.
   * @member {Number} driverId
   */
  exports.prototype['driverId'] = undefined;
  /**
   * Odometer reading at the beginning of the trip.
   * @member {Number} startOdometer
   */
  exports.prototype['startOdometer'] = undefined;
  /**
   * Odometer reading at the end of the trip.
   * @member {Number} endOdometer
   */
  exports.prototype['endOdometer'] = undefined;



  return exports;
}));


