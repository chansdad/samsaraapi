# SamsaraApi.TripResponseTrips

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startMs** | **Number** | Beginning of the trip in UNIX milliseconds. | [optional] 
**startCoordinates** | [**TripResponseStartCoordinates**](TripResponseStartCoordinates.md) |  | [optional] 
**startLocation** | **String** | Text representation of nearest identifiable location to the start (latitude, longitude) coordinates. | [optional] 
**endMs** | **Number** | End of the trip in UNIX milliseconds. | [optional] 
**endCoordinates** | [**TripResponseEndCoordinates**](TripResponseEndCoordinates.md) |  | [optional] 
**endLocation** | **String** | Text representation of nearest identifiable location to the end (latitude, longitude) coordinates. | [optional] 
**distanceMeters** | **Number** | Length of the trip in meters. | [optional] 
**fuelConsumedMl** | **Number** | Amount in milliliters of fuel consumed on this trip. | [optional] 
**tollMeters** | **Number** | Length in meters trip spent on toll roads. | [optional] 
**driverId** | **Number** | ID of the driver. | [optional] 
**startOdometer** | **Number** | Odometer reading at the beginning of the trip. | [optional] 
**endOdometer** | **Number** | Odometer reading at the end of the trip. | [optional] 


