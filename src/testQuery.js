const query = graphql`
  query testQuery { 
    stops(stopIds: ["781727"]) {
      stopTimes(isActive:true, nextArriving: 4) {
        arrival
        arrivalMinutes
        trip {
          headsign
          service {
            isActive
            start
            end
            days {
              monday
              tuesday
              wednesday
              thursday
              friday
              saturday
              sunday
            }
          }
        }
      }
    }
  }
`;

module.exports = query;