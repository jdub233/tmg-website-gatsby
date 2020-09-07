#!/bin/bash

curl --location --request POST "$1/fmi/data/v1/databases/TMG%20Trackr/layouts/PressWeb/_find" \
    --header 'Content-Type: application/json' \
    --header "Authorization: Bearer $2" \
    --data-raw '{
        "query":[
            {"ForWeb": "Yes"}
        ],
        "limit": "300",
        "sort": [
            {"fieldName": "Year Published", "sortOrder": "descend"},
            {"fieldName": "Month Published", "sortOrder": "descend"},
            {"fieldName": "Day Published", "sortOrder": "descend"}
        ]
    }' \
    | jq '.response.data' \
    > data/press.json
