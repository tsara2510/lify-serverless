import fetch from 'node-fetch'

export const handler = async () => {
  //const POKE_API = 'https://api.abbvie.com/patientrm/hcp-locator/physicianlocator'

  //const response = await fetch(POKE_API)
  //const data = await response.json()

  const response = await fetch("https://api-pq.abbvie.com/patientonboarding/getdetails/supportgroups?zip=60090&miles=50", {
    method: "get",
    headers: { "Content-Type": "application/json" , "Authorization" : "Basic NzI0NTQ0NWFiMDk0Y2E0YThiMmQ2NzkyOThjMTZjNmU6NjgwYTIyYjExMGQ2MWU0YTkzYTI5YjFhYzY2MzhiYjY="}
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