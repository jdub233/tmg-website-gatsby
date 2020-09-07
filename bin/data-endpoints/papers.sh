#!/bin/bash

curl --location --request POST "$1/fmi/data/v1/databases/TMG%20Trackr/layouts/PaperWeb2/_find" \
    --header 'Content-Type: application/json' \
    --header "Authorization: Bearer $2" \
    --data-raw '{
        "query":[
            {"ForWeb": "Yes"}
        ],
        "sort":[
            {"fieldName": "Paper Year", "sortOrder": "descend"},
            {"fieldName": "Paper Month", "sortOrder": "descend"}
        ],
        "limit": "400"
    }' \
    | jq '.response.data' \
    > data/papers.json
