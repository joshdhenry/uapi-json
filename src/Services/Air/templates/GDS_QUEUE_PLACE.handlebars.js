module.exports = `
<soapenv:Envelope
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:univ="http://www.travelport.com/schema/universal_v36_0"
  xmlns:gds="http://www.travelport.com/schema/gdsQueue_v36_0"
  xmlns:com="http://www.travelport.com/schema/common_v36_0"
  >
  <soapenv:Header />
  <soapenv:Body>
    <gds:GdsQueuePlaceReq TargetBranch="{{TargetBranch}}" RetrieveProviderReservationDetails="true" PseudoCityCode="{{pcc}}" ProviderCode="1P" ProviderLocatorCode="{{pnr}}">
      <com:BillingPointOfSaleInfo OriginApplication="uAPI" xmlns:com="http://www.travelport.com/schema/common_v36_0"/>
      <com:QueueSelector Queue="{{queue}}" xmlns:com="http://www.travelport.com/schema/common_v36_0"/>
      {{#if emulatePcc}}
      <com:OverridePCC ProviderCode="1P" PseudoCityCode="{{emulatePcc}}"/>
      {{/if}}
    </gds:GdsQueuePlaceReq>
  </soapenv:Body>
</soapenv:Envelope>
`;
