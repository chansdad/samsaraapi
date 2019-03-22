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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddressParam', 'model/AllRouteJobUpdates', 'model/Asset', 'model/AssetCable', 'model/AssetCurrentLocation', 'model/AssetCurrentLocationsResponse', 'model/AssetLocationResponse', 'model/AssetLocationResponseInner', 'model/AssetReeferResponse', 'model/AssetReeferResponseReeferStats', 'model/AssetReeferResponseReeferStatsAlarms', 'model/AssetReeferResponseReeferStatsAlarms1', 'model/AssetReeferResponseReeferStatsEngineHours', 'model/AssetReeferResponseReeferStatsFuelPercentage', 'model/AssetReeferResponseReeferStatsPowerStatus', 'model/AssetReeferResponseReeferStatsReturnAirTemp', 'model/AssetReeferResponseReeferStatsSetPoint', 'model/CargoResponse', 'model/CargoResponseSensors', 'model/CurrentDriver', 'model/DataInputHistoryResponse', 'model/DataInputHistoryResponsePoints', 'model/DispatchJob', 'model/DispatchJobCreate', 'model/DispatchRoute', 'model/DispatchRouteBase', 'model/DispatchRouteCreate', 'model/DispatchRouteHistoricalEntry', 'model/DispatchRouteHistory', 'model/DispatchRoutes', 'model/DoorResponse', 'model/DoorResponseSensors', 'model/Driver', 'model/DriverBase', 'model/DriverDailyLogResponse', 'model/DriverDailyLogResponseSummaries', 'model/DriverForCreate', 'model/DriversResponse', 'model/DriversResponseDrivers', 'model/DriversSummaryParam', 'model/DriversSummaryResponse', 'model/DriversSummaryResponseSummaries', 'model/DvirListResponse', 'model/DvirListResponseAuthorSignature', 'model/DvirListResponseDvirs', 'model/DvirListResponseMechanicOrAgentSignature', 'model/DvirListResponseNextDriverSignature', 'model/DvirListResponseVehicle', 'model/DvirListResponseVehicleDefects', 'model/ErrorResponse', 'model/GroupDriversParam', 'model/GroupParam', 'model/HistoryParam', 'model/HistoryParam1', 'model/HosAuthenticationLogsParam', 'model/HosAuthenticationLogsResponse', 'model/HosAuthenticationLogsResponseAuthenticationLogs', 'model/HosLogsParam', 'model/HosLogsParam1', 'model/HosLogsParam2', 'model/HosLogsResponse', 'model/HosLogsResponseLogs', 'model/HosLogsSummaryResponse', 'model/HosLogsSummaryResponseDrivers', 'model/HumidityResponse', 'model/HumidityResponseSensors', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2008', 'model/JobStatus', 'model/JobUpdateObject', 'model/Machine', 'model/MachineHistoryResponse', 'model/MachineHistoryResponseMachines', 'model/MachineHistoryResponseVibrations', 'model/PrevJobStatus', 'model/ReactivateDriverParam', 'model/Sensor', 'model/SensorHistoryResponse', 'model/SensorHistoryResponseResults', 'model/SensorParam', 'model/SensorshistorySeries', 'model/Tag', 'model/TagCreate', 'model/TagUpdate', 'model/TaggedAsset', 'model/TaggedAssetBase', 'model/TaggedDriver', 'model/TaggedDriverBase', 'model/TaggedMachine', 'model/TaggedMachineBase', 'model/TaggedSensor', 'model/TaggedSensorBase', 'model/TaggedVehicle', 'model/TaggedVehicleBase', 'model/TemperatureResponse', 'model/TemperatureResponseSensors', 'model/TripResponse', 'model/TripResponseEndCoordinates', 'model/TripResponseStartCoordinates', 'model/TripResponseTrips', 'model/TripsParam', 'model/Vehicle', 'model/VehicleLocation', 'model/VehicleMaintenance', 'model/VehicleMaintenanceJ1939', 'model/VehicleMaintenanceJ1939CheckEngineLight', 'model/VehicleMaintenanceJ1939DiagnosticTroubleCodes', 'model/VehicleMaintenancePassenger', 'model/VehicleMaintenancePassengerCheckEngineLight', 'model/VehicleMaintenancePassengerDiagnosticTroubleCodes', 'model/VehicleUpdateParam', 'api/AssetsApi', 'api/DefaultApi', 'api/DriversApi', 'api/FleetApi', 'api/IndustrialApi', 'api/RoutesApi', 'api/SensorsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AddressParam'), require('./model/AllRouteJobUpdates'), require('./model/Asset'), require('./model/AssetCable'), require('./model/AssetCurrentLocation'), require('./model/AssetCurrentLocationsResponse'), require('./model/AssetLocationResponse'), require('./model/AssetLocationResponseInner'), require('./model/AssetReeferResponse'), require('./model/AssetReeferResponseReeferStats'), require('./model/AssetReeferResponseReeferStatsAlarms'), require('./model/AssetReeferResponseReeferStatsAlarms1'), require('./model/AssetReeferResponseReeferStatsEngineHours'), require('./model/AssetReeferResponseReeferStatsFuelPercentage'), require('./model/AssetReeferResponseReeferStatsPowerStatus'), require('./model/AssetReeferResponseReeferStatsReturnAirTemp'), require('./model/AssetReeferResponseReeferStatsSetPoint'), require('./model/CargoResponse'), require('./model/CargoResponseSensors'), require('./model/CurrentDriver'), require('./model/DataInputHistoryResponse'), require('./model/DataInputHistoryResponsePoints'), require('./model/DispatchJob'), require('./model/DispatchJobCreate'), require('./model/DispatchRoute'), require('./model/DispatchRouteBase'), require('./model/DispatchRouteCreate'), require('./model/DispatchRouteHistoricalEntry'), require('./model/DispatchRouteHistory'), require('./model/DispatchRoutes'), require('./model/DoorResponse'), require('./model/DoorResponseSensors'), require('./model/Driver'), require('./model/DriverBase'), require('./model/DriverDailyLogResponse'), require('./model/DriverDailyLogResponseSummaries'), require('./model/DriverForCreate'), require('./model/DriversResponse'), require('./model/DriversResponseDrivers'), require('./model/DriversSummaryParam'), require('./model/DriversSummaryResponse'), require('./model/DriversSummaryResponseSummaries'), require('./model/DvirListResponse'), require('./model/DvirListResponseAuthorSignature'), require('./model/DvirListResponseDvirs'), require('./model/DvirListResponseMechanicOrAgentSignature'), require('./model/DvirListResponseNextDriverSignature'), require('./model/DvirListResponseVehicle'), require('./model/DvirListResponseVehicleDefects'), require('./model/ErrorResponse'), require('./model/GroupDriversParam'), require('./model/GroupParam'), require('./model/HistoryParam'), require('./model/HistoryParam1'), require('./model/HosAuthenticationLogsParam'), require('./model/HosAuthenticationLogsResponse'), require('./model/HosAuthenticationLogsResponseAuthenticationLogs'), require('./model/HosLogsParam'), require('./model/HosLogsParam1'), require('./model/HosLogsParam2'), require('./model/HosLogsResponse'), require('./model/HosLogsResponseLogs'), require('./model/HosLogsSummaryResponse'), require('./model/HosLogsSummaryResponseDrivers'), require('./model/HumidityResponse'), require('./model/HumidityResponseSensors'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/InlineResponse2006'), require('./model/InlineResponse2007'), require('./model/InlineResponse2008'), require('./model/JobStatus'), require('./model/JobUpdateObject'), require('./model/Machine'), require('./model/MachineHistoryResponse'), require('./model/MachineHistoryResponseMachines'), require('./model/MachineHistoryResponseVibrations'), require('./model/PrevJobStatus'), require('./model/ReactivateDriverParam'), require('./model/Sensor'), require('./model/SensorHistoryResponse'), require('./model/SensorHistoryResponseResults'), require('./model/SensorParam'), require('./model/SensorshistorySeries'), require('./model/Tag'), require('./model/TagCreate'), require('./model/TagUpdate'), require('./model/TaggedAsset'), require('./model/TaggedAssetBase'), require('./model/TaggedDriver'), require('./model/TaggedDriverBase'), require('./model/TaggedMachine'), require('./model/TaggedMachineBase'), require('./model/TaggedSensor'), require('./model/TaggedSensorBase'), require('./model/TaggedVehicle'), require('./model/TaggedVehicleBase'), require('./model/TemperatureResponse'), require('./model/TemperatureResponseSensors'), require('./model/TripResponse'), require('./model/TripResponseEndCoordinates'), require('./model/TripResponseStartCoordinates'), require('./model/TripResponseTrips'), require('./model/TripsParam'), require('./model/Vehicle'), require('./model/VehicleLocation'), require('./model/VehicleMaintenance'), require('./model/VehicleMaintenanceJ1939'), require('./model/VehicleMaintenanceJ1939CheckEngineLight'), require('./model/VehicleMaintenanceJ1939DiagnosticTroubleCodes'), require('./model/VehicleMaintenancePassenger'), require('./model/VehicleMaintenancePassengerCheckEngineLight'), require('./model/VehicleMaintenancePassengerDiagnosticTroubleCodes'), require('./model/VehicleUpdateParam'), require('./api/AssetsApi'), require('./api/DefaultApi'), require('./api/DriversApi'), require('./api/FleetApi'), require('./api/IndustrialApi'), require('./api/RoutesApi'), require('./api/SensorsApi'));
  }
}(function(ApiClient, AddressParam, AllRouteJobUpdates, Asset, AssetCable, AssetCurrentLocation, AssetCurrentLocationsResponse, AssetLocationResponse, AssetLocationResponseInner, AssetReeferResponse, AssetReeferResponseReeferStats, AssetReeferResponseReeferStatsAlarms, AssetReeferResponseReeferStatsAlarms1, AssetReeferResponseReeferStatsEngineHours, AssetReeferResponseReeferStatsFuelPercentage, AssetReeferResponseReeferStatsPowerStatus, AssetReeferResponseReeferStatsReturnAirTemp, AssetReeferResponseReeferStatsSetPoint, CargoResponse, CargoResponseSensors, CurrentDriver, DataInputHistoryResponse, DataInputHistoryResponsePoints, DispatchJob, DispatchJobCreate, DispatchRoute, DispatchRouteBase, DispatchRouteCreate, DispatchRouteHistoricalEntry, DispatchRouteHistory, DispatchRoutes, DoorResponse, DoorResponseSensors, Driver, DriverBase, DriverDailyLogResponse, DriverDailyLogResponseSummaries, DriverForCreate, DriversResponse, DriversResponseDrivers, DriversSummaryParam, DriversSummaryResponse, DriversSummaryResponseSummaries, DvirListResponse, DvirListResponseAuthorSignature, DvirListResponseDvirs, DvirListResponseMechanicOrAgentSignature, DvirListResponseNextDriverSignature, DvirListResponseVehicle, DvirListResponseVehicleDefects, ErrorResponse, GroupDriversParam, GroupParam, HistoryParam, HistoryParam1, HosAuthenticationLogsParam, HosAuthenticationLogsResponse, HosAuthenticationLogsResponseAuthenticationLogs, HosLogsParam, HosLogsParam1, HosLogsParam2, HosLogsResponse, HosLogsResponseLogs, HosLogsSummaryResponse, HosLogsSummaryResponseDrivers, HumidityResponse, HumidityResponseSensors, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2006, InlineResponse2007, InlineResponse2008, JobStatus, JobUpdateObject, Machine, MachineHistoryResponse, MachineHistoryResponseMachines, MachineHistoryResponseVibrations, PrevJobStatus, ReactivateDriverParam, Sensor, SensorHistoryResponse, SensorHistoryResponseResults, SensorParam, SensorshistorySeries, Tag, TagCreate, TagUpdate, TaggedAsset, TaggedAssetBase, TaggedDriver, TaggedDriverBase, TaggedMachine, TaggedMachineBase, TaggedSensor, TaggedSensorBase, TaggedVehicle, TaggedVehicleBase, TemperatureResponse, TemperatureResponseSensors, TripResponse, TripResponseEndCoordinates, TripResponseStartCoordinates, TripResponseTrips, TripsParam, Vehicle, VehicleLocation, VehicleMaintenance, VehicleMaintenanceJ1939, VehicleMaintenanceJ1939CheckEngineLight, VehicleMaintenanceJ1939DiagnosticTroubleCodes, VehicleMaintenancePassenger, VehicleMaintenancePassengerCheckEngineLight, VehicleMaintenancePassengerDiagnosticTroubleCodes, VehicleUpdateParam, AssetsApi, DefaultApi, DriversApi, FleetApi, IndustrialApi, RoutesApi, SensorsApi) {
  'use strict';

  /**
   * _IntroductionSamsara_provides_API_endpoints_for_interacting_with_Samsara_Cloud_so_that_you_can_build_powerful_applications_and_custom_solutions_with_sensor_data__Samsara_has_endpoints_available_to_track_and_analyze_sensors_vehicles_and_entire_fleets_The_Samsara_Cloud_API_is_a__RESTful_API_httpsen_wikipedia_orgwikiRepresentational_state_transfer_accessed_by_an__HTTP_httpsen_wikipedia_orgwikiHypertext_Transfer_Protocol_client_such_as_wget_or_curl_or_HTTP_libraries_of_most_modern_programming_languages_including_python_ruby_java__We_use_built_in_HTTP_features_like_HTTP_authentication_and_HTTP_verbs_which_are_understood_by_off_the_shelf_HTTP_clients__We_allow_you_to_interact_securely_with_our_API_from_a_client_side_web_application__though_you_should_never_expose_your_secret_API_key___JSON_httpwww_json_org_is_returned_by_all_API_responses_including_errors__If_youre_familiar_with_what_you_can_build_with_a_REST_API_the_following_API_reference_guide_will_be_your_go_to_resource_API_access_to_the_Samsara_cloud_is_available_to_all_Samsara_administrators__To_start_developing_with_Samsara_APIs_you_will_need_to__obtain_your_API_keys_sectionAuthentication_to_authenticate_your_API_requests_If_you_have_any_questions_you_can_reach_out_to_us_on__supportsamsara_com_mailtosupportsamsara_com_EndpointsAll_our_APIs_can_be_accessed_through_HTTP_requests_to_URLs_likecurlhttpsapi_samsara_comversionendpointAll_our_APIs_are__versioned_sectionVersioning__If_we_intend_to_make_breaking_changes_to_an_API_which_either_changes_the_response_format_or_request_parameter_we_will_increment_the_version__AuthenticationTo_authenticate_your_API_request_you_will_need_to_include_your_secret_token__You_can_manage_your_API_tokens_in_the__Dashboard_httpscloud_samsara_com__They_are_visible_under_Settings_Organization_API_Tokens_Your_API_tokens_carry_many_privileges_so_be_sure_to_keep_them_secure__Do_not_share_your_secret_API_tokens_in_publicly_accessible_areas_such_as_GitHub_client_side_code_and_so_on_Authentication_to_the_API_is_performed_via__HTTP_Basic_Auth_httpsen_wikipedia_orgwikiBasic_access_authentication__Provide_your_API_token_as_the_basic_access_token_value_in_the_URL__You_do_not_need_to_provide_a_password_curlhttpsapi_samsara_comversionendpointaccess_tokenaccess_tokenAll_API_requests_must_be_made_over__HTTPS_httpsen_wikipedia_orgwikiHTTPS__Calls_made_over_plain_HTTP_or_without_authentication_will_fail__Request_MethodsOur_API_endpoints_use__HTTP_request_methods_httpsen_wikipedia_orgwikiHypertext_Transfer_ProtocolRequest_methods_to_specify_the_desired_operation_to_be_performed__The_documentation_below_specified_request_method_supported_by_each_endpoint_and_the_resulting_action__GETGET_requests_are_typically_used_for_fetching_data__like_data_for_a_particular_driver__POSTPOST_requests_are_typically_used_for_creating_or_updating_a_record__like_adding_new_tags_to_the_system__With_that_being_said_a_few_of_our_POST_requests_can_be_used_for_fetching_data__like_current_location_data_of_your_fleet__PUTPUT_requests_are_typically_used_for_updating_an_existing_record__like_updating_devices_associated_with_a_particular_tag__DELETEDELETE_requests_are_used_for_deleting_a_record__like_deleting_a_tag_from_the_system__Response_CodesAll_API_requests_will_respond_with_appropriate__HTTP_status_code_httpsen_wikipedia_orgwikiList_of_HTTP_status_codes__Your_API_client_should_handle_each_response_class_differently__2XXThese_are_successful_responses_and_indicate_that_the_API_request_returned_the_expected_response__4XXThese_indicate_that_there_was_a_problem_with_the_request_like_a_missing_parameter_or_invalid_values__Check_the_response_for_specific__error_details_sectionError_Responses__Requests_that_respond_with_a_4XX_status_code_should_be_modified_before_retrying__5XXThese_indicate_server_errors_when_the_server_is_unreachable_or_is_misconfigured__In_this_case_you_should_retry_the_API_request_after_some_delay__Error_ResponsesIn_case_of_a_4XX_status_code_the_body_of_the_response_will_contain_information_to_briefly_explain_the_error_reported__To_help_debugging_the_error_you_can_refer_to_the_following_table_for_understanding_the_error_message__Status_Code__Message__Description__________________________________________________________________________________________________401__Invalid_token__The_API_token_is_invalid_and_could_not_be_authenticated__Please_refer_to_the__authentication_section_sectionAuthentication___404__Page_not_found__The_API_endpoint_being_accessed_is_invalid___400__Bad_request__Default_response_for_an_invalid_request__Please_check_the_request_to_make_sure_it_follows_the_format_specified_in_the_documentation___VersioningAll_our_APIs_are_versioned__Our_current_API_version_is_v1_and_we_are_continuously_working_on_improving_it_further_and_provide_additional_endpoints__If_we_intend_to_make_breaking_changes_to_an_API_which_either_changes_the_response_format_or_request_parameter_we_will_increment_the_version__Thus_you_can_use_our_current_API_version_worry_free__FAQsCheck_out_our__responses_to_FAQs_here_httpskb_samsara_comhcen_ussections360000538054_APIs__Dont_see_an_answer_to_your_question_Reach_out_to_us_on__supportsamsara_com_mailtosupportsamsara_com_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SamsaraApi = require('index'); // See note below*.
   * var xxxSvc = new SamsaraApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SamsaraApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SamsaraApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SamsaraApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddressParam model constructor.
     * @property {module:model/AddressParam}
     */
    AddressParam: AddressParam,
    /**
     * The AllRouteJobUpdates model constructor.
     * @property {module:model/AllRouteJobUpdates}
     */
    AllRouteJobUpdates: AllRouteJobUpdates,
    /**
     * The Asset model constructor.
     * @property {module:model/Asset}
     */
    Asset: Asset,
    /**
     * The AssetCable model constructor.
     * @property {module:model/AssetCable}
     */
    AssetCable: AssetCable,
    /**
     * The AssetCurrentLocation model constructor.
     * @property {module:model/AssetCurrentLocation}
     */
    AssetCurrentLocation: AssetCurrentLocation,
    /**
     * The AssetCurrentLocationsResponse model constructor.
     * @property {module:model/AssetCurrentLocationsResponse}
     */
    AssetCurrentLocationsResponse: AssetCurrentLocationsResponse,
    /**
     * The AssetLocationResponse model constructor.
     * @property {module:model/AssetLocationResponse}
     */
    AssetLocationResponse: AssetLocationResponse,
    /**
     * The AssetLocationResponseInner model constructor.
     * @property {module:model/AssetLocationResponseInner}
     */
    AssetLocationResponseInner: AssetLocationResponseInner,
    /**
     * The AssetReeferResponse model constructor.
     * @property {module:model/AssetReeferResponse}
     */
    AssetReeferResponse: AssetReeferResponse,
    /**
     * The AssetReeferResponseReeferStats model constructor.
     * @property {module:model/AssetReeferResponseReeferStats}
     */
    AssetReeferResponseReeferStats: AssetReeferResponseReeferStats,
    /**
     * The AssetReeferResponseReeferStatsAlarms model constructor.
     * @property {module:model/AssetReeferResponseReeferStatsAlarms}
     */
    AssetReeferResponseReeferStatsAlarms: AssetReeferResponseReeferStatsAlarms,
    /**
     * The AssetReeferResponseReeferStatsAlarms1 model constructor.
     * @property {module:model/AssetReeferResponseReeferStatsAlarms1}
     */
    AssetReeferResponseReeferStatsAlarms1: AssetReeferResponseReeferStatsAlarms1,
    /**
     * The AssetReeferResponseReeferStatsEngineHours model constructor.
     * @property {module:model/AssetReeferResponseReeferStatsEngineHours}
     */
    AssetReeferResponseReeferStatsEngineHours: AssetReeferResponseReeferStatsEngineHours,
    /**
     * The AssetReeferResponseReeferStatsFuelPercentage model constructor.
     * @property {module:model/AssetReeferResponseReeferStatsFuelPercentage}
     */
    AssetReeferResponseReeferStatsFuelPercentage: AssetReeferResponseReeferStatsFuelPercentage,
    /**
     * The AssetReeferResponseReeferStatsPowerStatus model constructor.
     * @property {module:model/AssetReeferResponseReeferStatsPowerStatus}
     */
    AssetReeferResponseReeferStatsPowerStatus: AssetReeferResponseReeferStatsPowerStatus,
    /**
     * The AssetReeferResponseReeferStatsReturnAirTemp model constructor.
     * @property {module:model/AssetReeferResponseReeferStatsReturnAirTemp}
     */
    AssetReeferResponseReeferStatsReturnAirTemp: AssetReeferResponseReeferStatsReturnAirTemp,
    /**
     * The AssetReeferResponseReeferStatsSetPoint model constructor.
     * @property {module:model/AssetReeferResponseReeferStatsSetPoint}
     */
    AssetReeferResponseReeferStatsSetPoint: AssetReeferResponseReeferStatsSetPoint,
    /**
     * The CargoResponse model constructor.
     * @property {module:model/CargoResponse}
     */
    CargoResponse: CargoResponse,
    /**
     * The CargoResponseSensors model constructor.
     * @property {module:model/CargoResponseSensors}
     */
    CargoResponseSensors: CargoResponseSensors,
    /**
     * The CurrentDriver model constructor.
     * @property {module:model/CurrentDriver}
     */
    CurrentDriver: CurrentDriver,
    /**
     * The DataInputHistoryResponse model constructor.
     * @property {module:model/DataInputHistoryResponse}
     */
    DataInputHistoryResponse: DataInputHistoryResponse,
    /**
     * The DataInputHistoryResponsePoints model constructor.
     * @property {module:model/DataInputHistoryResponsePoints}
     */
    DataInputHistoryResponsePoints: DataInputHistoryResponsePoints,
    /**
     * The DispatchJob model constructor.
     * @property {module:model/DispatchJob}
     */
    DispatchJob: DispatchJob,
    /**
     * The DispatchJobCreate model constructor.
     * @property {module:model/DispatchJobCreate}
     */
    DispatchJobCreate: DispatchJobCreate,
    /**
     * The DispatchRoute model constructor.
     * @property {module:model/DispatchRoute}
     */
    DispatchRoute: DispatchRoute,
    /**
     * The DispatchRouteBase model constructor.
     * @property {module:model/DispatchRouteBase}
     */
    DispatchRouteBase: DispatchRouteBase,
    /**
     * The DispatchRouteCreate model constructor.
     * @property {module:model/DispatchRouteCreate}
     */
    DispatchRouteCreate: DispatchRouteCreate,
    /**
     * The DispatchRouteHistoricalEntry model constructor.
     * @property {module:model/DispatchRouteHistoricalEntry}
     */
    DispatchRouteHistoricalEntry: DispatchRouteHistoricalEntry,
    /**
     * The DispatchRouteHistory model constructor.
     * @property {module:model/DispatchRouteHistory}
     */
    DispatchRouteHistory: DispatchRouteHistory,
    /**
     * The DispatchRoutes model constructor.
     * @property {module:model/DispatchRoutes}
     */
    DispatchRoutes: DispatchRoutes,
    /**
     * The DoorResponse model constructor.
     * @property {module:model/DoorResponse}
     */
    DoorResponse: DoorResponse,
    /**
     * The DoorResponseSensors model constructor.
     * @property {module:model/DoorResponseSensors}
     */
    DoorResponseSensors: DoorResponseSensors,
    /**
     * The Driver model constructor.
     * @property {module:model/Driver}
     */
    Driver: Driver,
    /**
     * The DriverBase model constructor.
     * @property {module:model/DriverBase}
     */
    DriverBase: DriverBase,
    /**
     * The DriverDailyLogResponse model constructor.
     * @property {module:model/DriverDailyLogResponse}
     */
    DriverDailyLogResponse: DriverDailyLogResponse,
    /**
     * The DriverDailyLogResponseSummaries model constructor.
     * @property {module:model/DriverDailyLogResponseSummaries}
     */
    DriverDailyLogResponseSummaries: DriverDailyLogResponseSummaries,
    /**
     * The DriverForCreate model constructor.
     * @property {module:model/DriverForCreate}
     */
    DriverForCreate: DriverForCreate,
    /**
     * The DriversResponse model constructor.
     * @property {module:model/DriversResponse}
     */
    DriversResponse: DriversResponse,
    /**
     * The DriversResponseDrivers model constructor.
     * @property {module:model/DriversResponseDrivers}
     */
    DriversResponseDrivers: DriversResponseDrivers,
    /**
     * The DriversSummaryParam model constructor.
     * @property {module:model/DriversSummaryParam}
     */
    DriversSummaryParam: DriversSummaryParam,
    /**
     * The DriversSummaryResponse model constructor.
     * @property {module:model/DriversSummaryResponse}
     */
    DriversSummaryResponse: DriversSummaryResponse,
    /**
     * The DriversSummaryResponseSummaries model constructor.
     * @property {module:model/DriversSummaryResponseSummaries}
     */
    DriversSummaryResponseSummaries: DriversSummaryResponseSummaries,
    /**
     * The DvirListResponse model constructor.
     * @property {module:model/DvirListResponse}
     */
    DvirListResponse: DvirListResponse,
    /**
     * The DvirListResponseAuthorSignature model constructor.
     * @property {module:model/DvirListResponseAuthorSignature}
     */
    DvirListResponseAuthorSignature: DvirListResponseAuthorSignature,
    /**
     * The DvirListResponseDvirs model constructor.
     * @property {module:model/DvirListResponseDvirs}
     */
    DvirListResponseDvirs: DvirListResponseDvirs,
    /**
     * The DvirListResponseMechanicOrAgentSignature model constructor.
     * @property {module:model/DvirListResponseMechanicOrAgentSignature}
     */
    DvirListResponseMechanicOrAgentSignature: DvirListResponseMechanicOrAgentSignature,
    /**
     * The DvirListResponseNextDriverSignature model constructor.
     * @property {module:model/DvirListResponseNextDriverSignature}
     */
    DvirListResponseNextDriverSignature: DvirListResponseNextDriverSignature,
    /**
     * The DvirListResponseVehicle model constructor.
     * @property {module:model/DvirListResponseVehicle}
     */
    DvirListResponseVehicle: DvirListResponseVehicle,
    /**
     * The DvirListResponseVehicleDefects model constructor.
     * @property {module:model/DvirListResponseVehicleDefects}
     */
    DvirListResponseVehicleDefects: DvirListResponseVehicleDefects,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The GroupDriversParam model constructor.
     * @property {module:model/GroupDriversParam}
     */
    GroupDriversParam: GroupDriversParam,
    /**
     * The GroupParam model constructor.
     * @property {module:model/GroupParam}
     */
    GroupParam: GroupParam,
    /**
     * The HistoryParam model constructor.
     * @property {module:model/HistoryParam}
     */
    HistoryParam: HistoryParam,
    /**
     * The HistoryParam1 model constructor.
     * @property {module:model/HistoryParam1}
     */
    HistoryParam1: HistoryParam1,
    /**
     * The HosAuthenticationLogsParam model constructor.
     * @property {module:model/HosAuthenticationLogsParam}
     */
    HosAuthenticationLogsParam: HosAuthenticationLogsParam,
    /**
     * The HosAuthenticationLogsResponse model constructor.
     * @property {module:model/HosAuthenticationLogsResponse}
     */
    HosAuthenticationLogsResponse: HosAuthenticationLogsResponse,
    /**
     * The HosAuthenticationLogsResponseAuthenticationLogs model constructor.
     * @property {module:model/HosAuthenticationLogsResponseAuthenticationLogs}
     */
    HosAuthenticationLogsResponseAuthenticationLogs: HosAuthenticationLogsResponseAuthenticationLogs,
    /**
     * The HosLogsParam model constructor.
     * @property {module:model/HosLogsParam}
     */
    HosLogsParam: HosLogsParam,
    /**
     * The HosLogsParam1 model constructor.
     * @property {module:model/HosLogsParam1}
     */
    HosLogsParam1: HosLogsParam1,
    /**
     * The HosLogsParam2 model constructor.
     * @property {module:model/HosLogsParam2}
     */
    HosLogsParam2: HosLogsParam2,
    /**
     * The HosLogsResponse model constructor.
     * @property {module:model/HosLogsResponse}
     */
    HosLogsResponse: HosLogsResponse,
    /**
     * The HosLogsResponseLogs model constructor.
     * @property {module:model/HosLogsResponseLogs}
     */
    HosLogsResponseLogs: HosLogsResponseLogs,
    /**
     * The HosLogsSummaryResponse model constructor.
     * @property {module:model/HosLogsSummaryResponse}
     */
    HosLogsSummaryResponse: HosLogsSummaryResponse,
    /**
     * The HosLogsSummaryResponseDrivers model constructor.
     * @property {module:model/HosLogsSummaryResponseDrivers}
     */
    HosLogsSummaryResponseDrivers: HosLogsSummaryResponseDrivers,
    /**
     * The HumidityResponse model constructor.
     * @property {module:model/HumidityResponse}
     */
    HumidityResponse: HumidityResponse,
    /**
     * The HumidityResponseSensors model constructor.
     * @property {module:model/HumidityResponseSensors}
     */
    HumidityResponseSensors: HumidityResponseSensors,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008: InlineResponse2008,
    /**
     * The JobStatus model constructor.
     * @property {module:model/JobStatus}
     */
    JobStatus: JobStatus,
    /**
     * The JobUpdateObject model constructor.
     * @property {module:model/JobUpdateObject}
     */
    JobUpdateObject: JobUpdateObject,
    /**
     * The Machine model constructor.
     * @property {module:model/Machine}
     */
    Machine: Machine,
    /**
     * The MachineHistoryResponse model constructor.
     * @property {module:model/MachineHistoryResponse}
     */
    MachineHistoryResponse: MachineHistoryResponse,
    /**
     * The MachineHistoryResponseMachines model constructor.
     * @property {module:model/MachineHistoryResponseMachines}
     */
    MachineHistoryResponseMachines: MachineHistoryResponseMachines,
    /**
     * The MachineHistoryResponseVibrations model constructor.
     * @property {module:model/MachineHistoryResponseVibrations}
     */
    MachineHistoryResponseVibrations: MachineHistoryResponseVibrations,
    /**
     * The PrevJobStatus model constructor.
     * @property {module:model/PrevJobStatus}
     */
    PrevJobStatus: PrevJobStatus,
    /**
     * The ReactivateDriverParam model constructor.
     * @property {module:model/ReactivateDriverParam}
     */
    ReactivateDriverParam: ReactivateDriverParam,
    /**
     * The Sensor model constructor.
     * @property {module:model/Sensor}
     */
    Sensor: Sensor,
    /**
     * The SensorHistoryResponse model constructor.
     * @property {module:model/SensorHistoryResponse}
     */
    SensorHistoryResponse: SensorHistoryResponse,
    /**
     * The SensorHistoryResponseResults model constructor.
     * @property {module:model/SensorHistoryResponseResults}
     */
    SensorHistoryResponseResults: SensorHistoryResponseResults,
    /**
     * The SensorParam model constructor.
     * @property {module:model/SensorParam}
     */
    SensorParam: SensorParam,
    /**
     * The SensorshistorySeries model constructor.
     * @property {module:model/SensorshistorySeries}
     */
    SensorshistorySeries: SensorshistorySeries,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
    /**
     * The TagCreate model constructor.
     * @property {module:model/TagCreate}
     */
    TagCreate: TagCreate,
    /**
     * The TagUpdate model constructor.
     * @property {module:model/TagUpdate}
     */
    TagUpdate: TagUpdate,
    /**
     * The TaggedAsset model constructor.
     * @property {module:model/TaggedAsset}
     */
    TaggedAsset: TaggedAsset,
    /**
     * The TaggedAssetBase model constructor.
     * @property {module:model/TaggedAssetBase}
     */
    TaggedAssetBase: TaggedAssetBase,
    /**
     * The TaggedDriver model constructor.
     * @property {module:model/TaggedDriver}
     */
    TaggedDriver: TaggedDriver,
    /**
     * The TaggedDriverBase model constructor.
     * @property {module:model/TaggedDriverBase}
     */
    TaggedDriverBase: TaggedDriverBase,
    /**
     * The TaggedMachine model constructor.
     * @property {module:model/TaggedMachine}
     */
    TaggedMachine: TaggedMachine,
    /**
     * The TaggedMachineBase model constructor.
     * @property {module:model/TaggedMachineBase}
     */
    TaggedMachineBase: TaggedMachineBase,
    /**
     * The TaggedSensor model constructor.
     * @property {module:model/TaggedSensor}
     */
    TaggedSensor: TaggedSensor,
    /**
     * The TaggedSensorBase model constructor.
     * @property {module:model/TaggedSensorBase}
     */
    TaggedSensorBase: TaggedSensorBase,
    /**
     * The TaggedVehicle model constructor.
     * @property {module:model/TaggedVehicle}
     */
    TaggedVehicle: TaggedVehicle,
    /**
     * The TaggedVehicleBase model constructor.
     * @property {module:model/TaggedVehicleBase}
     */
    TaggedVehicleBase: TaggedVehicleBase,
    /**
     * The TemperatureResponse model constructor.
     * @property {module:model/TemperatureResponse}
     */
    TemperatureResponse: TemperatureResponse,
    /**
     * The TemperatureResponseSensors model constructor.
     * @property {module:model/TemperatureResponseSensors}
     */
    TemperatureResponseSensors: TemperatureResponseSensors,
    /**
     * The TripResponse model constructor.
     * @property {module:model/TripResponse}
     */
    TripResponse: TripResponse,
    /**
     * The TripResponseEndCoordinates model constructor.
     * @property {module:model/TripResponseEndCoordinates}
     */
    TripResponseEndCoordinates: TripResponseEndCoordinates,
    /**
     * The TripResponseStartCoordinates model constructor.
     * @property {module:model/TripResponseStartCoordinates}
     */
    TripResponseStartCoordinates: TripResponseStartCoordinates,
    /**
     * The TripResponseTrips model constructor.
     * @property {module:model/TripResponseTrips}
     */
    TripResponseTrips: TripResponseTrips,
    /**
     * The TripsParam model constructor.
     * @property {module:model/TripsParam}
     */
    TripsParam: TripsParam,
    /**
     * The Vehicle model constructor.
     * @property {module:model/Vehicle}
     */
    Vehicle: Vehicle,
    /**
     * The VehicleLocation model constructor.
     * @property {module:model/VehicleLocation}
     */
    VehicleLocation: VehicleLocation,
    /**
     * The VehicleMaintenance model constructor.
     * @property {module:model/VehicleMaintenance}
     */
    VehicleMaintenance: VehicleMaintenance,
    /**
     * The VehicleMaintenanceJ1939 model constructor.
     * @property {module:model/VehicleMaintenanceJ1939}
     */
    VehicleMaintenanceJ1939: VehicleMaintenanceJ1939,
    /**
     * The VehicleMaintenanceJ1939CheckEngineLight model constructor.
     * @property {module:model/VehicleMaintenanceJ1939CheckEngineLight}
     */
    VehicleMaintenanceJ1939CheckEngineLight: VehicleMaintenanceJ1939CheckEngineLight,
    /**
     * The VehicleMaintenanceJ1939DiagnosticTroubleCodes model constructor.
     * @property {module:model/VehicleMaintenanceJ1939DiagnosticTroubleCodes}
     */
    VehicleMaintenanceJ1939DiagnosticTroubleCodes: VehicleMaintenanceJ1939DiagnosticTroubleCodes,
    /**
     * The VehicleMaintenancePassenger model constructor.
     * @property {module:model/VehicleMaintenancePassenger}
     */
    VehicleMaintenancePassenger: VehicleMaintenancePassenger,
    /**
     * The VehicleMaintenancePassengerCheckEngineLight model constructor.
     * @property {module:model/VehicleMaintenancePassengerCheckEngineLight}
     */
    VehicleMaintenancePassengerCheckEngineLight: VehicleMaintenancePassengerCheckEngineLight,
    /**
     * The VehicleMaintenancePassengerDiagnosticTroubleCodes model constructor.
     * @property {module:model/VehicleMaintenancePassengerDiagnosticTroubleCodes}
     */
    VehicleMaintenancePassengerDiagnosticTroubleCodes: VehicleMaintenancePassengerDiagnosticTroubleCodes,
    /**
     * The VehicleUpdateParam model constructor.
     * @property {module:model/VehicleUpdateParam}
     */
    VehicleUpdateParam: VehicleUpdateParam,
    /**
     * The AssetsApi service constructor.
     * @property {module:api/AssetsApi}
     */
    AssetsApi: AssetsApi,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi,
    /**
     * The DriversApi service constructor.
     * @property {module:api/DriversApi}
     */
    DriversApi: DriversApi,
    /**
     * The FleetApi service constructor.
     * @property {module:api/FleetApi}
     */
    FleetApi: FleetApi,
    /**
     * The IndustrialApi service constructor.
     * @property {module:api/IndustrialApi}
     */
    IndustrialApi: IndustrialApi,
    /**
     * The RoutesApi service constructor.
     * @property {module:api/RoutesApi}
     */
    RoutesApi: RoutesApi,
    /**
     * The SensorsApi service constructor.
     * @property {module:api/SensorsApi}
     */
    SensorsApi: SensorsApi
  };

  return exports;
}));
