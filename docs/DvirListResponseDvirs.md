# SamsaraApi.DvirListResponseDvirs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inspectionType** | **String** | Inspection type of the DVIR. | [optional] 
**vehicle** | [**DvirListResponseVehicle**](DvirListResponseVehicle.md) |  | [optional] 
**vehicleDefects** | [**[DvirListResponseVehicleDefects]**](DvirListResponseVehicleDefects.md) | Defects registered for the vehicle which was part of the DVIR. | [optional] 
**odometerMiles** | **Number** | The odometer reading in miles for the vehicle when the DVIR was done. | [optional] 
**trailerName** | **String** | The name of the trailer which was part of the DVIR. | [optional] 
**trailerDefects** | [**[DvirListResponseVehicleDefects]**](DvirListResponseVehicleDefects.md) | Defects registered for the trailer which was part of the DVIR. | [optional] 
**mechanicNotes** | **String** | The mechanics notes on the DVIR. | [optional] 
**vehicleCondition** | **String** | The condition of vechile on which DVIR was done. | [optional] 
**defectsCorrected** | **Boolean** | Signifies if the defects on the vehicle corrected after the DVIR is done. | [optional] 
**defectsNeedNotBeCorrected** | **Boolean** | Signifies if the defects on this vehicle can be ignored. | [optional] 
**authorSignature** | [**DvirListResponseAuthorSignature**](DvirListResponseAuthorSignature.md) |  | [optional] 
**mechanicOrAgentSignature** | [**DvirListResponseMechanicOrAgentSignature**](DvirListResponseMechanicOrAgentSignature.md) |  | [optional] 
**nextDriverSignature** | [**DvirListResponseNextDriverSignature**](DvirListResponseNextDriverSignature.md) |  | [optional] 


