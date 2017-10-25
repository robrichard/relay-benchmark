/**
 * @flow
 * @relayHash f73c9476209c9a6903fd1cb4700e963a
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type testQueryResponse = {|
  +stops: ?$ReadOnlyArray<?{|
    +stopTimes: ?$ReadOnlyArray<?{|
      +arrival: ?string;
      +arrivalMinutes: ?string;
      +trip: ?{|
        +headsign: ?string;
        +service: ?{|
          +isActive: ?boolean;
          +start: ?string;
          +end: ?string;
          +days: ?{|
            +monday: ?boolean;
            +tuesday: ?boolean;
            +wednesday: ?boolean;
            +thursday: ?boolean;
            +friday: ?boolean;
            +saturday: ?boolean;
            +sunday: ?boolean;
          |};
        |};
      |};
    |}>;
  |}>;
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "testQuery",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Literal",
        "name": "stopIds",
        "value": ["781727"],
        "type": "[String]"
      }],
      "concreteType": "Stop",
      "name": "stops",
      "plural": true,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": [{
          "kind": "Literal",
          "name": "isActive",
          "value": true,
          "type": "Boolean"
        }, {
          "kind": "Literal",
          "name": "nextArriving",
          "value": 4,
          "type": "Int"
        }],
        "concreteType": "StopTime",
        "name": "stopTimes",
        "plural": true,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "arrival",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "arrivalMinutes",
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "Trip",
          "name": "trip",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "headsign",
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Service",
            "name": "service",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "isActive",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "start",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "end",
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "ServiceDays",
              "name": "days",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "monday",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "tuesday",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "wednesday",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "thursday",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "friday",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "saturday",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "sunday",
                "storageKey": null
              }],
              "storageKey": null
            }],
            "storageKey": null
          }],
          "storageKey": null
        }],
        "storageKey": "stopTimes{\"isActive\":true,\"nextArriving\":4}"
      }],
      "storageKey": "stops{\"stopIds\":[\"781727\"]}"
    }],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "testQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "testQuery",
    "operation": "query",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "args": [{
        "kind": "Literal",
        "name": "stopIds",
        "value": ["781727"],
        "type": "[String]"
      }],
      "concreteType": "Stop",
      "name": "stops",
      "plural": true,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "args": [{
          "kind": "Literal",
          "name": "isActive",
          "value": true,
          "type": "Boolean"
        }, {
          "kind": "Literal",
          "name": "nextArriving",
          "value": 4,
          "type": "Int"
        }],
        "concreteType": "StopTime",
        "name": "stopTimes",
        "plural": true,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "arrival",
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "arrivalMinutes",
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "Trip",
          "name": "trip",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "headsign",
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Service",
            "name": "service",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "isActive",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "start",
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "end",
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "ServiceDays",
              "name": "days",
              "plural": false,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "monday",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "tuesday",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "wednesday",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "thursday",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "friday",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "saturday",
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "sunday",
                "storageKey": null
              }],
              "storageKey": null
            }],
            "storageKey": null
          }],
          "storageKey": null
        }],
        "storageKey": "stopTimes{\"isActive\":true,\"nextArriving\":4}"
      }],
      "storageKey": "stops{\"stopIds\":[\"781727\"]}"
    }]
  },
  "text": "query testQuery {\n  stops(stopIds: [\"781727\"]) {\n    stopTimes(isActive: true, nextArriving: 4) {\n      arrival\n      arrivalMinutes\n      trip {\n        headsign\n        service {\n          isActive\n          start\n          end\n          days {\n            monday\n            tuesday\n            wednesday\n            thursday\n            friday\n            saturday\n            sunday\n          }\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;