# SamsaraApi.DispatchRouteCreate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vehicleId** | **Number** | ID of the vehicle assigned to the dispatch route. Note that vehicle_id and driver_id are mutually exclusive. If neither is specified, then the route is unassigned. | [optional] 
**driverId** | **Number** | ID of the driver assigned to the dispatch route. Note that driver_id and vehicle_id are mutually exclusive. If neither is specified, then the route is unassigned. | [optional] 
**scheduledStartMs** | **Number** | The time in Unix epoch milliseconds that the route is scheduled to start. | 
**scheduledEndMs** | **Number** | The time in Unix epoch milliseconds that the last job in the route is scheduled to end. | 
**name** | **String** | Descriptive name of this route. | 
**groupId** | **Number** | ID of the group if the organization has multiple groups (optional). | [optional] 
**startLocationName** | **String** | The name of the route&#39;s starting location. | [optional] 
**startLocationAddress** | **String** | The address of the route&#39;s starting location, as it would be recognized if provided to maps.google.com | [optional] 
**startLocationLat** | **Number** | Latitude of the destination in decimal degrees. | 
**startLocationLng** | **Number** | Latitude of the destination in decimal degrees. | 


