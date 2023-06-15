import fetch from 'node-fetch'

export const handler = async () => {
  //const POKE_API = 'https://api.abbvie.com/patientrm/hcp-locator/physicianlocator'

  //const response = await fetch(POKE_API)
  //const data = await response.json()
  const body = {
                   "PhysicianLocatorRequest": {
                       "PhysicianLocatorRequestHeader": {
                           "PublisherRequestId": "1234102",
                           "PublisherName": "RINVOQ"
                       },
                       "PhysicianLocatorRequestBody": {
                           "PhysicianAddress": {
                               "Zip": "60004"
                           },
                           "SpecialtyName": "Immunology - Rheum",
                           "IndicationId": 10020,
                           "SearchRadius": "25",
                           "TermsConditionsCheck": "true",
                           "RecordsFrom": "1",
                           "RecordCount": "10",
                           "SearchUnBranded":"No",
                           "GeoCoordinates" : {
                               "Latitude" : "",
                               "Longitude" : ""
                           }
                       }
                   }
               };

  const response = await fetch("https://api.abbvie.com/patientrm/hcp-locator/physicianlocator", {
    method: 'post',
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" , "Authorization": "Basic NTBhNjE0OTEzODdiMTI0MDg0N2Y5MDUzMmJhYzNjZDA6YzJjYmFjMjI0Y2U1NmE0MmExMzEzM2E2OGRlM2Y3MzE"}
  });

  const data = await response.json()
  console.log(data)

  return {
    statusCode: 200,
    body: JSON.stringify({
      data
    })
  }
}