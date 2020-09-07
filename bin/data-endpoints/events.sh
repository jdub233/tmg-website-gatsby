#!/bin/bash

curl --location --request POST "$1/fmi/data/v1/databases/TMG%20Trackr/layouts/Event/_find" \
    --header 'Content-Type: application/json' \
    --header "Authorization: Bearer $2" \
    --data-raw '{
        "query":[
            {"ForWeb": "Yes"}
        ],
        "sort":[
            {"fieldName": "Event Year", "sortOrder": "descend"},
            {"fieldName": "Event Month", "sortOrder": "descend"},
            {"fieldName": "Event Day", "sortOrder": "descend"}
        ],
        "limit": "200"
    }' \
    | jq '.response.data' \
    > data/events.json
