#!/bin/bash

curl --location --request POST "$1/fmi/data/v1/databases/TMG%20Trackr/layouts/PersonWeb/_find" \
    --header 'Content-Type: application/json' \
    --header "Authorization: Bearer $2" \
    --data-raw '{
        "query":[
            {"ForWeb": "Yes"}
        ],
        "sort":[
            {"fieldName": "GraduatingYear", "sortOrder": "ascend"},
            {"fieldName": "Last Name", "sortOrder": "ascend"}
        ],
        "portal": ["PeoplePaperJoin People WebView", "PeopleProjectJoin People WebView"],
        "limit.PeoplePaperJoin People WebView": "500",
        "limit.PeopleProjectJoin People WebView": "300",
        "limit": "200"
    }' \
    | jq '.response.data' \
    > data/people.json
