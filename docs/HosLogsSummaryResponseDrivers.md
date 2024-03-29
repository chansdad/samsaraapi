# SamsaraApi.HosLogsSummaryResponseDrivers

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driverId** | **Number** | ID of the driver. | [optional] 
**driverName** | **String** | Name of the driver. | [optional] 
**vehicleName** | **String** | Name of the vehicle. | [optional] 
**dutyStatus** | **String** | The Hours of Service status type. One of &#x60;OFF_DUTY&#x60;, &#x60;SLEEPER_BED&#x60;, &#x60;DRIVING&#x60;, &#x60;ON_DUTY&#x60;, &#x60;YARD_MOVE&#x60;, &#x60;PERSONAL_CONVEYANCE&#x60;. | [optional] 
**timeInCurrentStatus** | **Number** | The amount of time (in ms) that the driver has been in the current &#x60;dutyStatus&#x60;. | [optional] 
**timeUntilBreak** | **Number** | The amount of time (in ms) remaining until the driver cannot drive without a rest break. | [optional] 
**shiftDriveRemaining** | **Number** | The amount of remaining shift drive time (in ms). | [optional] 
**shiftRemaining** | **Number** | The amount of remaining shift time (in ms). | [optional] 
**cycleRemaining** | **Number** | The amount of remaining cycle time (in ms). | [optional] 
**cycleTomorrow** | **Number** | The amount of cycle time (in ms) available tomorrow. | [optional] 
**drivingInViolationToday** | **Number** | The amount of driving time in violation today (in ms). | [optional] 
**drivingInViolationCycle** | **Number** | The amount of driving time in violation in this cycle (in ms). | [optional] 


