# SamsaraApi.DriverBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Driver&#39;s name. | 
**username** | **String** | Driver&#39;s login username into the driver app. | [optional] 
**phone** | **String** | Driver&#39;s phone number. | [optional] 
**licenseNumber** | **String** | Driver&#39;s state issued license number. | [optional] 
**licenseState** | **String** | Abbreviation of state that issued driver&#39;s license. | [optional] 
**eldExempt** | **Boolean** | Flag indicating this driver is exempt from the Electronic Logging Mandate. | [optional] 
**eldExemptReason** | **String** | Reason that this driver is exempt from the Electronic Logging Mandate (see eldExempt). | [optional] 
**eldBigDayExemptionEnabled** | **Boolean** | Flag indicating this driver may use Big Day excemptions in ELD logs. | [optional] 
**eldAdverseWeatherExemptionEnabled** | **Boolean** | Flag indicating this driver may use Adverse Weather exemptions in ELD logs. | [optional] 
**eldPcEnabled** | **Boolean** | Flag indicating this driver may select the Personal Conveyance duty status in ELD logs. | [optional] [default to false]
**eldYmEnabled** | **Boolean** | Flag indicating this driver may select the Yard Move duty status in ELD logs. | [optional] [default to false]
**eldDayStartHour** | **Number** | 0 indicating midnight-to-midnight ELD driving hours, 12 to indicate noon-to-noon driving hours. | [optional] 
**vehicleId** | **Number** | ID of the vehicle assigned to the driver for static vehicle assignments. (uncommon). | [optional] 
**groupId** | **Number** | ID of the group if the organization has multiple groups (uncommon). | [optional] 


