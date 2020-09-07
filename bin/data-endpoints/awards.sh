#!/bin/bash

curl --location --request POST "$1/fmi/data/v1/databases/TMG%20Trackr/layouts/Award/_find" \
    --header 'Content-Type: application/json' \
    --header "Authorization: Bearer $2" \
    --data-raw '{
    "query":[
        {"ForWeb": "Yes"}
    ],
    "sort":[
        {"fieldName": "Award Year", "sortOrder": "descend"}
    ],
    "limit": "200"
    }' \
    | ./node_modules/node-jq/bin/jq '.response.data' \
    > data/awards.json
