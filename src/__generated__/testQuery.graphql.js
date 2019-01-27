/**
 * @flow
 * @relayHash 6369f40245e7f89daffab892abd09ce0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type testQueryVariables = {||};
export type testQueryResponse = {|
  +stops: ?$ReadOnlyArray<?{|
    +stopTimes: ?$ReadOnlyArray<?{|
      +arrival: ?string,
      +arrivalMinutes: ?string,
      +trip: ?{|
        +headsign: ?string,
        +service: ?{|
          +isActive: ?boolean,
          +start: ?string,
          +end: ?string,
          +days: ?{|
            +monday: ?boolean,
            +tuesday: ?boolean,
            +wednesday: ?boolean,
            +thursday: ?boolean,
            +friday: ?boolean,
            +saturday: ?boolean,
            +sunday: ?boolean,
          |},
        |},
      |},
    |}>
  |}>
|};
export type testQuery = {|
  variables: testQueryVariables,
  response: testQueryResponse,
|};
*/


/*
query testQuery {
  stops(stopIds: ["781727"]) {
    stopTimes(isActive: true, nextArriving: 4) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "stops",
    "storageKey": "stops(stopIds:[\"781727\"])",
    "args": [
      {
        "kind": "Literal",
        "name": "stopIds",
        "value": [
          "781727"
        ],
        "type": "[String]"
      }
    ],
    "concreteType": "Stop",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "stopTimes",
        "storageKey": "stopTimes(isActive:true,nextArriving:4)",
        "args": [
          {
            "kind": "Literal",
            "name": "isActive",
            "value": true,
            "type": "Boolean"
          },
          {
            "kind": "Literal",
            "name": "nextArriving",
            "value": 4,
            "type": "Int"
          }
        ],
        "concreteType": "StopTime",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "arrival",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "arrivalMinutes",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "trip",
            "storageKey": null,
            "args": null,
            "concreteType": "Trip",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "headsign",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "service",
                "storageKey": null,
                "args": null,
                "concreteType": "Service",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isActive",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "start",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "end",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "days",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ServiceDays",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "monday",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "tuesday",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "wednesday",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "thursday",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "friday",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "saturday",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "sunday",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "testQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "testQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "testQuery",
    "id": null,
    "text": "query testQuery {\n  stops(stopIds: [\"781727\"]) {\n    stopTimes(isActive: true, nextArriving: 4) {\n      arrival\n      arrivalMinutes\n      trip {\n        headsign\n        service {\n          isActive\n          start\n          end\n          days {\n            monday\n            tuesday\n            wednesday\n            thursday\n            friday\n            saturday\n            sunday\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '058c2af4cab2c8e34416a9f135e3e5d9';
module.exports = node;
