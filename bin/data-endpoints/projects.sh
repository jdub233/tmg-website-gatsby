#!/bin/bash

curl --location --request POST "$1/fmi//data/v1/databases/TMG%20Trackr/layouts/ProjectWeb/_find" \
  --header 'Content-Type: application/json' \
  --header "Authorization: Bearer $2" \
  --data-raw '{
    "query":[
      {"ForWeb": "Yes"}
    ],
    "sort":[
      {"fieldName": "Project Year", "sortOrder": "descend"}
    ],
    "limit": "300"
  }' \
  | ./node_modules/node-jq/bin/jq '.response.data' \
  > data/projects.json
