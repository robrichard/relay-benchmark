
// hardcode query result for benchmark
function fetchQuery() {
  return Promise.resolve({
    "data": {
      "stops": [
        {
          "stopTimes": [
            {
              "arrival": "20:35:00",
              "arrivalMinutes": "5.87095",
              "trip": {
                "headsign": "Journal Square",
                "service": {
                  "isActive": true,
                  "start": "20170917",
                  "end": "20181225",
                  "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": false,
                    "sunday": false
                  }
                }
              }
            },
            {
              "arrival": "20:45:00",
              "arrivalMinutes": "15.87095",
              "trip": {
                "headsign": "Journal Square",
                "service": {
                  "isActive": true,
                  "start": "20170917",
                  "end": "20181225",
                  "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": false,
                    "sunday": false
                  }
                }
              }
            },
            {
              "arrival": "20:55:00",
              "arrivalMinutes": "25.870933333333333",
              "trip": {
                "headsign": "Journal Square",
                "service": {
                  "isActive": true,
                  "start": "20170917",
                  "end": "20181225",
                  "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": false,
                    "sunday": false
                  }
                }
              }
            },
            {
              "arrival": "21:05:00",
              "arrivalMinutes": "35.87093333333333",
              "trip": {
                "headsign": "Journal Square",
                "service": {
                  "isActive": true,
                  "start": "20170917",
                  "end": "20181225",
                  "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": false,
                    "sunday": false
                  }
                }
              }
            },
            {
              "arrival": "20:39:00",
              "arrivalMinutes": "9.870933333333333",
              "trip": {
                "headsign": "Newark",
                "service": {
                  "isActive": true,
                  "start": "20170917",
                  "end": "20181225",
                  "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": false,
                    "sunday": false
                  }
                }
              }
            },
            {
              "arrival": "20:49:00",
              "arrivalMinutes": "19.870933333333333",
              "trip": {
                "headsign": "Newark",
                "service": {
                  "isActive": true,
                  "start": "20170917",
                  "end": "20181225",
                  "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": false,
                    "sunday": false
                  }
                }
              }
            },
            {
              "arrival": "20:59:00",
              "arrivalMinutes": "29.870933333333333",
              "trip": {
                "headsign": "Newark",
                "service": {
                  "isActive": true,
                  "start": "20170917",
                  "end": "20181225",
                  "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": false,
                    "sunday": false
                  }
                }
              }
            },
            {
              "arrival": "21:09:00",
              "arrivalMinutes": "39.87093333333333",
              "trip": {
                "headsign": "Newark",
                "service": {
                  "isActive": true,
                  "start": "20170917",
                  "end": "20181225",
                  "days": {
                    "monday": true,
                    "tuesday": true,
                    "wednesday": true,
                    "thursday": true,
                    "friday": true,
                    "saturday": false,
                    "sunday": false
                  }
                }
              }
            }
          ]
        }
      ]
    }
  });
}

module.exports = fetchQuery;