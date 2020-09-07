#!/bin/bash

curl --location --request POST "$1/fmi/data/v1/databases/TMG%20Assets/layouts/Assets%20List%20ADDING/_find" \
    --header 'Content-Type: application/json' \
    --header "Authorization: Bearer $2" \
    --data-raw '{
        "query":[
            {"Collections::ForWeb": "Yes"}
        ],
        "limit": "800"
        }' \
    | jq '.response.data' \
    > data/assets.json
