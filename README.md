# samsara_api

SamsaraApi - JavaScript client for samsara_api
Introduction  Samsara provides API endpoints for interacting with Samsara Cloud, so that you can build powerful applications and custom solutions with sensor data. Samsara has endpoints available to track and analyze sensors, vehicles, and entire fleets.  The Samsara Cloud API is a [RESTful API](https://en.wikipedia.org/wiki/Representational_state_transfer) accessed by an [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) client such as wget or curl, or HTTP libraries of most modern programming languages including python, ruby, java. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients. We allow you to interact securely with our API from a client-side web application (though you should never expose your secret API key). [JSON](http://www.json.org/) is returned by all API responses, including errors. If you’re familiar with what you can build with a REST API, the following API reference guide will be your go-to resource.  API access to the Samsara cloud is available to all Samsara administrators. To start developing with Samsara APIs you will need to [obtain your API keys](#section/Authentication) to authenticate your API requests.  If you have any questions you can reach out to us on [support@samsara.com](mailto:support@samsara.com)  # Endpoints  All our APIs can be accessed through HTTP requests to URLs like:  ```curl https://api.samsara.com/<version>/<endpoint> ```  All our APIs are [versioned](#section/Versioning). If we intend to make breaking changes to an API which either changes the response format or request parameter, we will increment the version.  # Authentication  To authenticate your API request you will need to include your secret token. You can manage your API tokens in the [Dashboard](https://cloud.samsara.com). They are visible under `Settings->Organization->API Tokens`.  Your API tokens carry many privileges, so be sure to keep them secure. Do not share your secret API tokens in publicly accessible areas such as GitHub, client-side code, and so on.  Authentication to the API is performed via [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Provide your API token as the basic access_token value in the URL. You do not need to provide a password.  ```curl https://api.samsara.com/<version>/<endpoint>?access_token={{access_token}} ```  All API requests must be made over [HTTPS](https://en.wikipedia.org/wiki/HTTPS). Calls made over plain HTTP or without authentication will fail.  # Request Methods  Our API endpoints use [HTTP request methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) to specify the desired operation to be performed. The documentation below specified request method supported by each endpoint and the resulting action.  ## GET  GET requests are typically used for fetching data (like data for a particular driver).  ## POST  POST requests are typically used for creating or updating a record (like adding new tags to the system). With that being said, a few of our POST requests can be used for fetching data (like current location data of your fleet).  ## PUT  PUT requests are typically used for updating an existing record (like updating devices associated with a particular tag).  ## DELETE  DELETE requests are used for deleting a record (like deleting a tag from the system).  # Response Codes  All API requests will respond with appropriate [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). Your API client should handle each response class differently.  ## 2XX  These are successful responses and indicate that the API request returned the expected response.  ## 4XX  These indicate that there was a problem with the request like a missing parameter or invalid values. Check the response for specific [error details](#section/Error-Responses). Requests that respond with a 4XX status code, should be modified before retrying.  ## 5XX  These indicate server errors when the server is unreachable or is misconfigured. In this case, you should retry the API request after some delay.  # Error Responses  In case of a 4XX status code, the body of the response will contain information to briefly explain the error reported. To help debugging the error, you can refer to the following table for understanding the error message.  | Status Code | Message | Description | |-------------|----------------|-------------------------------------------------------------------| | 401 | Invalid token | The API token is invalid and could not be authenticated. Please refer to the [authentication section](#section/Authentication). | | 404 | Page not found | The API endpoint being accessed is invalid. | | 400 | Bad request | Default response for an invalid request. Please check the request to make sure it follows the format specified in the documentation. |  # Versioning  All our APIs are versioned. Our current API version is `v1` and we are continuously working on improving it further and provide additional endpoints. If we intend to make breaking changes to an API which either changes the response format or request parameter, we will increment the version. Thus, you can use our current API version worry free.  # FAQs  Check out our [responses to FAQs here](https://kb.samsara.com/hc/en-us/sections/360000538054-APIs). Don’t see an answer to your question? Reach out to us on [support@samsara.com](mailto:support@samsara.com).
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install samsara_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your samsara_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('samsara_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/samsara_api
then install it via:

```shell
    npm install YOUR_USERNAME/samsara_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SamsaraApi = require('samsara_api');

var api = new SamsaraApi.AssetsApi()

var accessToken = "accessToken_example"; // {String} Samsara API access token.

var groupParam = new SamsaraApi.GroupParam(); // {GroupParam} Group ID to query.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAllAssetCurrentLocations(accessToken, groupParam, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.samsara.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SamsaraApi.AssetsApi* | [**getAllAssetCurrentLocations**](docs/AssetsApi.md#getAllAssetCurrentLocations) | **GET** /fleet/assets/locations | /fleet/assets/locations
*SamsaraApi.AssetsApi* | [**getAllAssets**](docs/AssetsApi.md#getAllAssets) | **GET** /fleet/assets | /fleet/assets
*SamsaraApi.AssetsApi* | [**getAssetLocation**](docs/AssetsApi.md#getAssetLocation) | **GET** /fleet/assets/{asset_id}/locations | /fleet/assets/{assetId:[0-9]+}/locations
*SamsaraApi.AssetsApi* | [**getAssetReefer**](docs/AssetsApi.md#getAssetReefer) | **GET** /fleet/assets/{asset_id}/reefer | /fleet/assets/{assetId:[0-9]+}/reefer
*SamsaraApi.DefaultApi* | [**addFleetAddress**](docs/DefaultApi.md#addFleetAddress) | **POST** /fleet/add_address | /fleet/add_address
*SamsaraApi.DefaultApi* | [**createDispatchRoute**](docs/DefaultApi.md#createDispatchRoute) | **POST** /fleet/dispatch/routes | /fleet/dispatch/routes
*SamsaraApi.DefaultApi* | [**createDriver**](docs/DefaultApi.md#createDriver) | **POST** /fleet/drivers/create | /fleet/drivers/create
*SamsaraApi.DefaultApi* | [**createDriverDispatchRoute**](docs/DefaultApi.md#createDriverDispatchRoute) | **POST** /fleet/drivers/{driver_id}/dispatch/routes | /fleet/drivers/{driver_id:[0-9]+}/dispatch/routes
*SamsaraApi.DefaultApi* | [**createTag**](docs/DefaultApi.md#createTag) | **POST** /tags | /tags
*SamsaraApi.DefaultApi* | [**createVehicleDispatchRoute**](docs/DefaultApi.md#createVehicleDispatchRoute) | **POST** /fleet/vehicles/{vehicle_id}/dispatch/routes | /fleet/vehicles/{vehicle_id:[0-9]+}/dispatch/routes
*SamsaraApi.DefaultApi* | [**deactivateDriver**](docs/DefaultApi.md#deactivateDriver) | **DELETE** /fleet/drivers/{driver_id} | /fleet/drivers/{driver_id:[0-9]+}
*SamsaraApi.DefaultApi* | [**deleteDispatchRouteById**](docs/DefaultApi.md#deleteDispatchRouteById) | **DELETE** /fleet/dispatch/routes/{route_id} | /fleet/dispatch/routes/{route_id:[0-9]+}/
*SamsaraApi.DefaultApi* | [**deleteTagById**](docs/DefaultApi.md#deleteTagById) | **DELETE** /tags/{tag_id} | /tags/{tag_id:[0-9]+}
*SamsaraApi.DefaultApi* | [**fetchAllDispatchRoutes**](docs/DefaultApi.md#fetchAllDispatchRoutes) | **GET** /fleet/dispatch/routes | /fleet/dispatch/routes
*SamsaraApi.DefaultApi* | [**fetchAllRouteJobUpdates**](docs/DefaultApi.md#fetchAllRouteJobUpdates) | **GET** /fleet/dispatch/routes/job_updates | /fleet/dispatch/routes/job_updates
*SamsaraApi.DefaultApi* | [**getAllAssetCurrentLocations**](docs/DefaultApi.md#getAllAssetCurrentLocations) | **GET** /fleet/assets/locations | /fleet/assets/locations
*SamsaraApi.DefaultApi* | [**getAllAssets**](docs/DefaultApi.md#getAllAssets) | **GET** /fleet/assets | /fleet/assets
*SamsaraApi.DefaultApi* | [**getAllDataInputs**](docs/DefaultApi.md#getAllDataInputs) | **GET** /industrial/data | /industrial/data
*SamsaraApi.DefaultApi* | [**getAllDeactivatedDrivers**](docs/DefaultApi.md#getAllDeactivatedDrivers) | **GET** /fleet/drivers/inactive | /fleet/drivers/inactive
*SamsaraApi.DefaultApi* | [**getAllTags**](docs/DefaultApi.md#getAllTags) | **GET** /tags | /tags
*SamsaraApi.DefaultApi* | [**getAssetLocation**](docs/DefaultApi.md#getAssetLocation) | **GET** /fleet/assets/{asset_id}/locations | /fleet/assets/{assetId:[0-9]+}/locations
*SamsaraApi.DefaultApi* | [**getAssetReefer**](docs/DefaultApi.md#getAssetReefer) | **GET** /fleet/assets/{asset_id}/reefer | /fleet/assets/{assetId:[0-9]+}/reefer
*SamsaraApi.DefaultApi* | [**getDataInput**](docs/DefaultApi.md#getDataInput) | **GET** /industrial/data/{data_input_id} | /industrial/data/{data_input_id:[0-9]+}
*SamsaraApi.DefaultApi* | [**getDeactivatedDriverById**](docs/DefaultApi.md#getDeactivatedDriverById) | **GET** /fleet/drivers/inactive/{driver_id} | /fleet/drivers/inactive/{driver_id:[0-9]+}
*SamsaraApi.DefaultApi* | [**getDispatchRouteById**](docs/DefaultApi.md#getDispatchRouteById) | **GET** /fleet/dispatch/routes/{route_id} | /fleet/dispatch/routes/{route_id:[0-9]+}
*SamsaraApi.DefaultApi* | [**getDispatchRouteHistory**](docs/DefaultApi.md#getDispatchRouteHistory) | **GET** /fleet/dispatch/routes/{route_id}/history | /fleet/dispatch/routes/{route_id:[0-9]+}/history
*SamsaraApi.DefaultApi* | [**getDispatchRoutesByDriverId**](docs/DefaultApi.md#getDispatchRoutesByDriverId) | **GET** /fleet/drivers/{driver_id}/dispatch/routes | /fleet/drivers/{driver_id:[0-9]+}/dispatch/routes
*SamsaraApi.DefaultApi* | [**getDispatchRoutesByVehicleId**](docs/DefaultApi.md#getDispatchRoutesByVehicleId) | **GET** /fleet/vehicles/{vehicle_id}/dispatch/routes | /fleet/vehicles/{vehicle_id:[0-9]+}/dispatch/routes
*SamsaraApi.DefaultApi* | [**getDriverById**](docs/DefaultApi.md#getDriverById) | **GET** /fleet/drivers/{driver_id} | /fleet/drivers/{driver_id:[0-9]+}
*SamsaraApi.DefaultApi* | [**getDvirs**](docs/DefaultApi.md#getDvirs) | **GET** /fleet/maintenance/dvirs | /fleet/maintenance/dvirs
*SamsaraApi.DefaultApi* | [**getFleet**](docs/DefaultApi.md#getFleet) | **POST** /fleet/list | /fleet/list
*SamsaraApi.DefaultApi* | [**getFleetDrivers**](docs/DefaultApi.md#getFleetDrivers) | **POST** /fleet/drivers | /fleet/drivers
*SamsaraApi.DefaultApi* | [**getFleetDriversHosDailyLogs**](docs/DefaultApi.md#getFleetDriversHosDailyLogs) | **POST** /fleet/drivers/{driver_id}/hos_daily_logs | /fleet/drivers/{driver_id:[0-9]+}/hos_daily_logs
*SamsaraApi.DefaultApi* | [**getFleetDriversSummary**](docs/DefaultApi.md#getFleetDriversSummary) | **POST** /fleet/drivers/summary | /fleet/drivers/summary
*SamsaraApi.DefaultApi* | [**getFleetHosAuthenticationLogs**](docs/DefaultApi.md#getFleetHosAuthenticationLogs) | **POST** /fleet/hos_authentication_logs | /fleet/hos_authentication_logs
*SamsaraApi.DefaultApi* | [**getFleetHosLogs**](docs/DefaultApi.md#getFleetHosLogs) | **POST** /fleet/hos_logs | /fleet/hos_logs
*SamsaraApi.DefaultApi* | [**getFleetHosLogsSummary**](docs/DefaultApi.md#getFleetHosLogsSummary) | **POST** /fleet/hos_logs_summary | /fleet/hos_logs_summary
*SamsaraApi.DefaultApi* | [**getFleetLocations**](docs/DefaultApi.md#getFleetLocations) | **POST** /fleet/locations | /fleet/locations
*SamsaraApi.DefaultApi* | [**getFleetMaintenanceList**](docs/DefaultApi.md#getFleetMaintenanceList) | **POST** /fleet/maintenance/list | /fleet/maintenance/list
*SamsaraApi.DefaultApi* | [**getFleetTrips**](docs/DefaultApi.md#getFleetTrips) | **POST** /fleet/trips | /fleet/trips
*SamsaraApi.DefaultApi* | [**getMachines**](docs/DefaultApi.md#getMachines) | **POST** /machines/list | /machines/list
*SamsaraApi.DefaultApi* | [**getMachinesHistory**](docs/DefaultApi.md#getMachinesHistory) | **POST** /machines/history | /machines/history
*SamsaraApi.DefaultApi* | [**getSensors**](docs/DefaultApi.md#getSensors) | **POST** /sensors/list | /sensors/list
*SamsaraApi.DefaultApi* | [**getSensorsCargo**](docs/DefaultApi.md#getSensorsCargo) | **POST** /sensors/cargo | /sensors/cargo
*SamsaraApi.DefaultApi* | [**getSensorsDoor**](docs/DefaultApi.md#getSensorsDoor) | **POST** /sensors/door | /sensors/door
*SamsaraApi.DefaultApi* | [**getSensorsHistory**](docs/DefaultApi.md#getSensorsHistory) | **POST** /sensors/history | /sensors/history
*SamsaraApi.DefaultApi* | [**getSensorsHumidity**](docs/DefaultApi.md#getSensorsHumidity) | **POST** /sensors/humidity | /sensors/humidity
*SamsaraApi.DefaultApi* | [**getSensorsTemperature**](docs/DefaultApi.md#getSensorsTemperature) | **POST** /sensors/temperature | /sensors/temperature
*SamsaraApi.DefaultApi* | [**getTagById**](docs/DefaultApi.md#getTagById) | **GET** /tags/{tag_id} | /tags/{tag_id:[0-9]+}
*SamsaraApi.DefaultApi* | [**reactivateDriverById**](docs/DefaultApi.md#reactivateDriverById) | **PUT** /fleet/drivers/inactive/{driver_id} | /fleet/drivers/inactive/{driver_id:[0-9]+}
*SamsaraApi.DefaultApi* | [**updateDispatchRouteById**](docs/DefaultApi.md#updateDispatchRouteById) | **PUT** /fleet/dispatch/routes/{route_id} | /fleet/dispatch/routes/{route_id:[0-9]+}/
*SamsaraApi.DefaultApi* | [**updateTagById**](docs/DefaultApi.md#updateTagById) | **PUT** /tags/{tag_id} | /tags/{tag_id:[0-9]+}
*SamsaraApi.DefaultApi* | [**updateVehicles**](docs/DefaultApi.md#updateVehicles) | **POST** /fleet/set_data | /fleet/set_data
*SamsaraApi.DriversApi* | [**createDriver**](docs/DriversApi.md#createDriver) | **POST** /fleet/drivers/create | /fleet/drivers/create
*SamsaraApi.DriversApi* | [**deactivateDriver**](docs/DriversApi.md#deactivateDriver) | **DELETE** /fleet/drivers/{driver_id} | /fleet/drivers/{driver_id:[0-9]+}
*SamsaraApi.DriversApi* | [**getAllDeactivatedDrivers**](docs/DriversApi.md#getAllDeactivatedDrivers) | **GET** /fleet/drivers/inactive | /fleet/drivers/inactive
*SamsaraApi.DriversApi* | [**getDeactivatedDriverById**](docs/DriversApi.md#getDeactivatedDriverById) | **GET** /fleet/drivers/inactive/{driver_id} | /fleet/drivers/inactive/{driver_id:[0-9]+}
*SamsaraApi.DriversApi* | [**getDriverById**](docs/DriversApi.md#getDriverById) | **GET** /fleet/drivers/{driver_id} | /fleet/drivers/{driver_id:[0-9]+}
*SamsaraApi.DriversApi* | [**reactivateDriverById**](docs/DriversApi.md#reactivateDriverById) | **PUT** /fleet/drivers/inactive/{driver_id} | /fleet/drivers/inactive/{driver_id:[0-9]+}
*SamsaraApi.FleetApi* | [**addFleetAddress**](docs/FleetApi.md#addFleetAddress) | **POST** /fleet/add_address | /fleet/add_address
*SamsaraApi.FleetApi* | [**createDispatchRoute**](docs/FleetApi.md#createDispatchRoute) | **POST** /fleet/dispatch/routes | /fleet/dispatch/routes
*SamsaraApi.FleetApi* | [**createDriver**](docs/FleetApi.md#createDriver) | **POST** /fleet/drivers/create | /fleet/drivers/create
*SamsaraApi.FleetApi* | [**createDriverDispatchRoute**](docs/FleetApi.md#createDriverDispatchRoute) | **POST** /fleet/drivers/{driver_id}/dispatch/routes | /fleet/drivers/{driver_id:[0-9]+}/dispatch/routes
*SamsaraApi.FleetApi* | [**createVehicleDispatchRoute**](docs/FleetApi.md#createVehicleDispatchRoute) | **POST** /fleet/vehicles/{vehicle_id}/dispatch/routes | /fleet/vehicles/{vehicle_id:[0-9]+}/dispatch/routes
*SamsaraApi.FleetApi* | [**deactivateDriver**](docs/FleetApi.md#deactivateDriver) | **DELETE** /fleet/drivers/{driver_id} | /fleet/drivers/{driver_id:[0-9]+}
*SamsaraApi.FleetApi* | [**deleteDispatchRouteById**](docs/FleetApi.md#deleteDispatchRouteById) | **DELETE** /fleet/dispatch/routes/{route_id} | /fleet/dispatch/routes/{route_id:[0-9]+}/
*SamsaraApi.FleetApi* | [**fetchAllDispatchRoutes**](docs/FleetApi.md#fetchAllDispatchRoutes) | **GET** /fleet/dispatch/routes | /fleet/dispatch/routes
*SamsaraApi.FleetApi* | [**fetchAllRouteJobUpdates**](docs/FleetApi.md#fetchAllRouteJobUpdates) | **GET** /fleet/dispatch/routes/job_updates | /fleet/dispatch/routes/job_updates
*SamsaraApi.FleetApi* | [**getAllAssetCurrentLocations**](docs/FleetApi.md#getAllAssetCurrentLocations) | **GET** /fleet/assets/locations | /fleet/assets/locations
*SamsaraApi.FleetApi* | [**getAllAssets**](docs/FleetApi.md#getAllAssets) | **GET** /fleet/assets | /fleet/assets
*SamsaraApi.FleetApi* | [**getAllDeactivatedDrivers**](docs/FleetApi.md#getAllDeactivatedDrivers) | **GET** /fleet/drivers/inactive | /fleet/drivers/inactive
*SamsaraApi.FleetApi* | [**getAssetLocation**](docs/FleetApi.md#getAssetLocation) | **GET** /fleet/assets/{asset_id}/locations | /fleet/assets/{assetId:[0-9]+}/locations
*SamsaraApi.FleetApi* | [**getAssetReefer**](docs/FleetApi.md#getAssetReefer) | **GET** /fleet/assets/{asset_id}/reefer | /fleet/assets/{assetId:[0-9]+}/reefer
*SamsaraApi.FleetApi* | [**getDeactivatedDriverById**](docs/FleetApi.md#getDeactivatedDriverById) | **GET** /fleet/drivers/inactive/{driver_id} | /fleet/drivers/inactive/{driver_id:[0-9]+}
*SamsaraApi.FleetApi* | [**getDispatchRouteById**](docs/FleetApi.md#getDispatchRouteById) | **GET** /fleet/dispatch/routes/{route_id} | /fleet/dispatch/routes/{route_id:[0-9]+}
*SamsaraApi.FleetApi* | [**getDispatchRouteHistory**](docs/FleetApi.md#getDispatchRouteHistory) | **GET** /fleet/dispatch/routes/{route_id}/history | /fleet/dispatch/routes/{route_id:[0-9]+}/history
*SamsaraApi.FleetApi* | [**getDispatchRoutesByDriverId**](docs/FleetApi.md#getDispatchRoutesByDriverId) | **GET** /fleet/drivers/{driver_id}/dispatch/routes | /fleet/drivers/{driver_id:[0-9]+}/dispatch/routes
*SamsaraApi.FleetApi* | [**getDispatchRoutesByVehicleId**](docs/FleetApi.md#getDispatchRoutesByVehicleId) | **GET** /fleet/vehicles/{vehicle_id}/dispatch/routes | /fleet/vehicles/{vehicle_id:[0-9]+}/dispatch/routes
*SamsaraApi.FleetApi* | [**getDriverById**](docs/FleetApi.md#getDriverById) | **GET** /fleet/drivers/{driver_id} | /fleet/drivers/{driver_id:[0-9]+}
*SamsaraApi.FleetApi* | [**getDvirs**](docs/FleetApi.md#getDvirs) | **GET** /fleet/maintenance/dvirs | /fleet/maintenance/dvirs
*SamsaraApi.FleetApi* | [**getFleet**](docs/FleetApi.md#getFleet) | **POST** /fleet/list | /fleet/list
*SamsaraApi.FleetApi* | [**getFleetDrivers**](docs/FleetApi.md#getFleetDrivers) | **POST** /fleet/drivers | /fleet/drivers
*SamsaraApi.FleetApi* | [**getFleetDriversHosDailyLogs**](docs/FleetApi.md#getFleetDriversHosDailyLogs) | **POST** /fleet/drivers/{driver_id}/hos_daily_logs | /fleet/drivers/{driver_id:[0-9]+}/hos_daily_logs
*SamsaraApi.FleetApi* | [**getFleetDriversSummary**](docs/FleetApi.md#getFleetDriversSummary) | **POST** /fleet/drivers/summary | /fleet/drivers/summary
*SamsaraApi.FleetApi* | [**getFleetHosAuthenticationLogs**](docs/FleetApi.md#getFleetHosAuthenticationLogs) | **POST** /fleet/hos_authentication_logs | /fleet/hos_authentication_logs
*SamsaraApi.FleetApi* | [**getFleetHosLogs**](docs/FleetApi.md#getFleetHosLogs) | **POST** /fleet/hos_logs | /fleet/hos_logs
*SamsaraApi.FleetApi* | [**getFleetHosLogsSummary**](docs/FleetApi.md#getFleetHosLogsSummary) | **POST** /fleet/hos_logs_summary | /fleet/hos_logs_summary
*SamsaraApi.FleetApi* | [**getFleetLocations**](docs/FleetApi.md#getFleetLocations) | **POST** /fleet/locations | /fleet/locations
*SamsaraApi.FleetApi* | [**getFleetMaintenanceList**](docs/FleetApi.md#getFleetMaintenanceList) | **POST** /fleet/maintenance/list | /fleet/maintenance/list
*SamsaraApi.FleetApi* | [**getFleetTrips**](docs/FleetApi.md#getFleetTrips) | **POST** /fleet/trips | /fleet/trips
*SamsaraApi.FleetApi* | [**reactivateDriverById**](docs/FleetApi.md#reactivateDriverById) | **PUT** /fleet/drivers/inactive/{driver_id} | /fleet/drivers/inactive/{driver_id:[0-9]+}
*SamsaraApi.FleetApi* | [**updateDispatchRouteById**](docs/FleetApi.md#updateDispatchRouteById) | **PUT** /fleet/dispatch/routes/{route_id} | /fleet/dispatch/routes/{route_id:[0-9]+}/
*SamsaraApi.FleetApi* | [**updateVehicles**](docs/FleetApi.md#updateVehicles) | **POST** /fleet/set_data | /fleet/set_data
*SamsaraApi.IndustrialApi* | [**getAllDataInputs**](docs/IndustrialApi.md#getAllDataInputs) | **GET** /industrial/data | /industrial/data
*SamsaraApi.IndustrialApi* | [**getDataInput**](docs/IndustrialApi.md#getDataInput) | **GET** /industrial/data/{data_input_id} | /industrial/data/{data_input_id:[0-9]+}
*SamsaraApi.IndustrialApi* | [**getMachines**](docs/IndustrialApi.md#getMachines) | **POST** /machines/list | /machines/list
*SamsaraApi.IndustrialApi* | [**getMachinesHistory**](docs/IndustrialApi.md#getMachinesHistory) | **POST** /machines/history | /machines/history
*SamsaraApi.RoutesApi* | [**createDispatchRoute**](docs/RoutesApi.md#createDispatchRoute) | **POST** /fleet/dispatch/routes | /fleet/dispatch/routes
*SamsaraApi.RoutesApi* | [**createDriverDispatchRoute**](docs/RoutesApi.md#createDriverDispatchRoute) | **POST** /fleet/drivers/{driver_id}/dispatch/routes | /fleet/drivers/{driver_id:[0-9]+}/dispatch/routes
*SamsaraApi.RoutesApi* | [**createVehicleDispatchRoute**](docs/RoutesApi.md#createVehicleDispatchRoute) | **POST** /fleet/vehicles/{vehicle_id}/dispatch/routes | /fleet/vehicles/{vehicle_id:[0-9]+}/dispatch/routes
*SamsaraApi.RoutesApi* | [**deleteDispatchRouteById**](docs/RoutesApi.md#deleteDispatchRouteById) | **DELETE** /fleet/dispatch/routes/{route_id} | /fleet/dispatch/routes/{route_id:[0-9]+}/
*SamsaraApi.RoutesApi* | [**fetchAllDispatchRoutes**](docs/RoutesApi.md#fetchAllDispatchRoutes) | **GET** /fleet/dispatch/routes | /fleet/dispatch/routes
*SamsaraApi.RoutesApi* | [**fetchAllRouteJobUpdates**](docs/RoutesApi.md#fetchAllRouteJobUpdates) | **GET** /fleet/dispatch/routes/job_updates | /fleet/dispatch/routes/job_updates
*SamsaraApi.RoutesApi* | [**getDispatchRouteById**](docs/RoutesApi.md#getDispatchRouteById) | **GET** /fleet/dispatch/routes/{route_id} | /fleet/dispatch/routes/{route_id:[0-9]+}
*SamsaraApi.RoutesApi* | [**getDispatchRouteHistory**](docs/RoutesApi.md#getDispatchRouteHistory) | **GET** /fleet/dispatch/routes/{route_id}/history | /fleet/dispatch/routes/{route_id:[0-9]+}/history
*SamsaraApi.RoutesApi* | [**getDispatchRoutesByDriverId**](docs/RoutesApi.md#getDispatchRoutesByDriverId) | **GET** /fleet/drivers/{driver_id}/dispatch/routes | /fleet/drivers/{driver_id:[0-9]+}/dispatch/routes
*SamsaraApi.RoutesApi* | [**getDispatchRoutesByVehicleId**](docs/RoutesApi.md#getDispatchRoutesByVehicleId) | **GET** /fleet/vehicles/{vehicle_id}/dispatch/routes | /fleet/vehicles/{vehicle_id:[0-9]+}/dispatch/routes
*SamsaraApi.RoutesApi* | [**updateDispatchRouteById**](docs/RoutesApi.md#updateDispatchRouteById) | **PUT** /fleet/dispatch/routes/{route_id} | /fleet/dispatch/routes/{route_id:[0-9]+}/
*SamsaraApi.SensorsApi* | [**getSensors**](docs/SensorsApi.md#getSensors) | **POST** /sensors/list | /sensors/list
*SamsaraApi.SensorsApi* | [**getSensorsCargo**](docs/SensorsApi.md#getSensorsCargo) | **POST** /sensors/cargo | /sensors/cargo
*SamsaraApi.SensorsApi* | [**getSensorsDoor**](docs/SensorsApi.md#getSensorsDoor) | **POST** /sensors/door | /sensors/door
*SamsaraApi.SensorsApi* | [**getSensorsHistory**](docs/SensorsApi.md#getSensorsHistory) | **POST** /sensors/history | /sensors/history
*SamsaraApi.SensorsApi* | [**getSensorsHumidity**](docs/SensorsApi.md#getSensorsHumidity) | **POST** /sensors/humidity | /sensors/humidity
*SamsaraApi.SensorsApi* | [**getSensorsTemperature**](docs/SensorsApi.md#getSensorsTemperature) | **POST** /sensors/temperature | /sensors/temperature


## Documentation for Models

 - [SamsaraApi.AddressParam](docs/AddressParam.md)
 - [SamsaraApi.AllRouteJobUpdates](docs/AllRouteJobUpdates.md)
 - [SamsaraApi.Asset](docs/Asset.md)
 - [SamsaraApi.AssetCable](docs/AssetCable.md)
 - [SamsaraApi.AssetCurrentLocation](docs/AssetCurrentLocation.md)
 - [SamsaraApi.AssetCurrentLocationsResponse](docs/AssetCurrentLocationsResponse.md)
 - [SamsaraApi.AssetLocationResponse](docs/AssetLocationResponse.md)
 - [SamsaraApi.AssetLocationResponseInner](docs/AssetLocationResponseInner.md)
 - [SamsaraApi.AssetReeferResponse](docs/AssetReeferResponse.md)
 - [SamsaraApi.AssetReeferResponseReeferStats](docs/AssetReeferResponseReeferStats.md)
 - [SamsaraApi.AssetReeferResponseReeferStatsAlarms](docs/AssetReeferResponseReeferStatsAlarms.md)
 - [SamsaraApi.AssetReeferResponseReeferStatsAlarms1](docs/AssetReeferResponseReeferStatsAlarms1.md)
 - [SamsaraApi.AssetReeferResponseReeferStatsEngineHours](docs/AssetReeferResponseReeferStatsEngineHours.md)
 - [SamsaraApi.AssetReeferResponseReeferStatsFuelPercentage](docs/AssetReeferResponseReeferStatsFuelPercentage.md)
 - [SamsaraApi.AssetReeferResponseReeferStatsPowerStatus](docs/AssetReeferResponseReeferStatsPowerStatus.md)
 - [SamsaraApi.AssetReeferResponseReeferStatsReturnAirTemp](docs/AssetReeferResponseReeferStatsReturnAirTemp.md)
 - [SamsaraApi.AssetReeferResponseReeferStatsSetPoint](docs/AssetReeferResponseReeferStatsSetPoint.md)
 - [SamsaraApi.CargoResponse](docs/CargoResponse.md)
 - [SamsaraApi.CargoResponseSensors](docs/CargoResponseSensors.md)
 - [SamsaraApi.CurrentDriver](docs/CurrentDriver.md)
 - [SamsaraApi.DataInputHistoryResponse](docs/DataInputHistoryResponse.md)
 - [SamsaraApi.DataInputHistoryResponsePoints](docs/DataInputHistoryResponsePoints.md)
 - [SamsaraApi.DispatchJob](docs/DispatchJob.md)
 - [SamsaraApi.DispatchJobCreate](docs/DispatchJobCreate.md)
 - [SamsaraApi.DispatchRoute](docs/DispatchRoute.md)
 - [SamsaraApi.DispatchRouteBase](docs/DispatchRouteBase.md)
 - [SamsaraApi.DispatchRouteCreate](docs/DispatchRouteCreate.md)
 - [SamsaraApi.DispatchRouteHistoricalEntry](docs/DispatchRouteHistoricalEntry.md)
 - [SamsaraApi.DispatchRouteHistory](docs/DispatchRouteHistory.md)
 - [SamsaraApi.DispatchRoutes](docs/DispatchRoutes.md)
 - [SamsaraApi.DoorResponse](docs/DoorResponse.md)
 - [SamsaraApi.DoorResponseSensors](docs/DoorResponseSensors.md)
 - [SamsaraApi.Driver](docs/Driver.md)
 - [SamsaraApi.DriverBase](docs/DriverBase.md)
 - [SamsaraApi.DriverDailyLogResponse](docs/DriverDailyLogResponse.md)
 - [SamsaraApi.DriverDailyLogResponseSummaries](docs/DriverDailyLogResponseSummaries.md)
 - [SamsaraApi.DriverForCreate](docs/DriverForCreate.md)
 - [SamsaraApi.DriversResponse](docs/DriversResponse.md)
 - [SamsaraApi.DriversResponseDrivers](docs/DriversResponseDrivers.md)
 - [SamsaraApi.DriversSummaryParam](docs/DriversSummaryParam.md)
 - [SamsaraApi.DriversSummaryResponse](docs/DriversSummaryResponse.md)
 - [SamsaraApi.DriversSummaryResponseSummaries](docs/DriversSummaryResponseSummaries.md)
 - [SamsaraApi.DvirListResponse](docs/DvirListResponse.md)
 - [SamsaraApi.DvirListResponseAuthorSignature](docs/DvirListResponseAuthorSignature.md)
 - [SamsaraApi.DvirListResponseDvirs](docs/DvirListResponseDvirs.md)
 - [SamsaraApi.DvirListResponseMechanicOrAgentSignature](docs/DvirListResponseMechanicOrAgentSignature.md)
 - [SamsaraApi.DvirListResponseNextDriverSignature](docs/DvirListResponseNextDriverSignature.md)
 - [SamsaraApi.DvirListResponseVehicle](docs/DvirListResponseVehicle.md)
 - [SamsaraApi.DvirListResponseVehicleDefects](docs/DvirListResponseVehicleDefects.md)
 - [SamsaraApi.ErrorResponse](docs/ErrorResponse.md)
 - [SamsaraApi.GroupDriversParam](docs/GroupDriversParam.md)
 - [SamsaraApi.GroupParam](docs/GroupParam.md)
 - [SamsaraApi.HistoryParam](docs/HistoryParam.md)
 - [SamsaraApi.HistoryParam1](docs/HistoryParam1.md)
 - [SamsaraApi.HosAuthenticationLogsParam](docs/HosAuthenticationLogsParam.md)
 - [SamsaraApi.HosAuthenticationLogsResponse](docs/HosAuthenticationLogsResponse.md)
 - [SamsaraApi.HosAuthenticationLogsResponseAuthenticationLogs](docs/HosAuthenticationLogsResponseAuthenticationLogs.md)
 - [SamsaraApi.HosLogsParam](docs/HosLogsParam.md)
 - [SamsaraApi.HosLogsParam1](docs/HosLogsParam1.md)
 - [SamsaraApi.HosLogsParam2](docs/HosLogsParam2.md)
 - [SamsaraApi.HosLogsResponse](docs/HosLogsResponse.md)
 - [SamsaraApi.HosLogsResponseLogs](docs/HosLogsResponseLogs.md)
 - [SamsaraApi.HosLogsSummaryResponse](docs/HosLogsSummaryResponse.md)
 - [SamsaraApi.HosLogsSummaryResponseDrivers](docs/HosLogsSummaryResponseDrivers.md)
 - [SamsaraApi.HumidityResponse](docs/HumidityResponse.md)
 - [SamsaraApi.HumidityResponseSensors](docs/HumidityResponseSensors.md)
 - [SamsaraApi.InlineResponse200](docs/InlineResponse200.md)
 - [SamsaraApi.InlineResponse2001](docs/InlineResponse2001.md)
 - [SamsaraApi.InlineResponse2002](docs/InlineResponse2002.md)
 - [SamsaraApi.InlineResponse2003](docs/InlineResponse2003.md)
 - [SamsaraApi.InlineResponse2004](docs/InlineResponse2004.md)
 - [SamsaraApi.InlineResponse2005](docs/InlineResponse2005.md)
 - [SamsaraApi.InlineResponse2006](docs/InlineResponse2006.md)
 - [SamsaraApi.InlineResponse2007](docs/InlineResponse2007.md)
 - [SamsaraApi.InlineResponse2008](docs/InlineResponse2008.md)
 - [SamsaraApi.JobStatus](docs/JobStatus.md)
 - [SamsaraApi.JobUpdateObject](docs/JobUpdateObject.md)
 - [SamsaraApi.Machine](docs/Machine.md)
 - [SamsaraApi.MachineHistoryResponse](docs/MachineHistoryResponse.md)
 - [SamsaraApi.MachineHistoryResponseMachines](docs/MachineHistoryResponseMachines.md)
 - [SamsaraApi.MachineHistoryResponseVibrations](docs/MachineHistoryResponseVibrations.md)
 - [SamsaraApi.PrevJobStatus](docs/PrevJobStatus.md)
 - [SamsaraApi.ReactivateDriverParam](docs/ReactivateDriverParam.md)
 - [SamsaraApi.Sensor](docs/Sensor.md)
 - [SamsaraApi.SensorHistoryResponse](docs/SensorHistoryResponse.md)
 - [SamsaraApi.SensorHistoryResponseResults](docs/SensorHistoryResponseResults.md)
 - [SamsaraApi.SensorParam](docs/SensorParam.md)
 - [SamsaraApi.SensorshistorySeries](docs/SensorshistorySeries.md)
 - [SamsaraApi.Tag](docs/Tag.md)
 - [SamsaraApi.TagCreate](docs/TagCreate.md)
 - [SamsaraApi.TagUpdate](docs/TagUpdate.md)
 - [SamsaraApi.TaggedAsset](docs/TaggedAsset.md)
 - [SamsaraApi.TaggedAssetBase](docs/TaggedAssetBase.md)
 - [SamsaraApi.TaggedDriver](docs/TaggedDriver.md)
 - [SamsaraApi.TaggedDriverBase](docs/TaggedDriverBase.md)
 - [SamsaraApi.TaggedMachine](docs/TaggedMachine.md)
 - [SamsaraApi.TaggedMachineBase](docs/TaggedMachineBase.md)
 - [SamsaraApi.TaggedSensor](docs/TaggedSensor.md)
 - [SamsaraApi.TaggedSensorBase](docs/TaggedSensorBase.md)
 - [SamsaraApi.TaggedVehicle](docs/TaggedVehicle.md)
 - [SamsaraApi.TaggedVehicleBase](docs/TaggedVehicleBase.md)
 - [SamsaraApi.TemperatureResponse](docs/TemperatureResponse.md)
 - [SamsaraApi.TemperatureResponseSensors](docs/TemperatureResponseSensors.md)
 - [SamsaraApi.TripResponse](docs/TripResponse.md)
 - [SamsaraApi.TripResponseEndCoordinates](docs/TripResponseEndCoordinates.md)
 - [SamsaraApi.TripResponseStartCoordinates](docs/TripResponseStartCoordinates.md)
 - [SamsaraApi.TripResponseTrips](docs/TripResponseTrips.md)
 - [SamsaraApi.TripsParam](docs/TripsParam.md)
 - [SamsaraApi.Vehicle](docs/Vehicle.md)
 - [SamsaraApi.VehicleLocation](docs/VehicleLocation.md)
 - [SamsaraApi.VehicleMaintenance](docs/VehicleMaintenance.md)
 - [SamsaraApi.VehicleMaintenanceJ1939](docs/VehicleMaintenanceJ1939.md)
 - [SamsaraApi.VehicleMaintenanceJ1939CheckEngineLight](docs/VehicleMaintenanceJ1939CheckEngineLight.md)
 - [SamsaraApi.VehicleMaintenanceJ1939DiagnosticTroubleCodes](docs/VehicleMaintenanceJ1939DiagnosticTroubleCodes.md)
 - [SamsaraApi.VehicleMaintenancePassenger](docs/VehicleMaintenancePassenger.md)
 - [SamsaraApi.VehicleMaintenancePassengerCheckEngineLight](docs/VehicleMaintenancePassengerCheckEngineLight.md)
 - [SamsaraApi.VehicleMaintenancePassengerDiagnosticTroubleCodes](docs/VehicleMaintenancePassengerDiagnosticTroubleCodes.md)
 - [SamsaraApi.VehicleUpdateParam](docs/VehicleUpdateParam.md)


## Documentation for Authorization

 All endpoints do not require authorization.

