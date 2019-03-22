# SamsaraApi.DriverDailyLogResponseSummaries

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeHours** | **Number** | Hours spent on duty or driving, rounded to two decimal places. | [optional] 
**certified** | **Boolean** | Whether this HOS day chart was certified by the driver. | [optional] 
**certifiedAtMs** | **Number** | Unix epoch time (in ms) of time when this chart was certified. If this chart is uncertified, 0. | [optional] 
**distanceMiles** | **Number** | Distance driven in miles, rounded to two decimal places. | [optional] 
**startMs** | **Number** | End of the HOS day, specified in milliseconds UNIX time. | [optional] 
**endMs** | **Number** | End of the HOS day, specified in milliseconds UNIX time. | [optional] 
**trailerIds** | **Object** | List of trailer ID&#39;s associated with the driver for the day. | [optional] 
**vehicleIds** | **Object** | List of vehicle ID&#39;s associated with the driver for the day. | [optional] 


