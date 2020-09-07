#!/bin/bash

curl --location --request POST "$1/fmi/data/v1/databases/TMG%20Trackr/sessions" \
    -d "" \
    --header 'Content-Type: application/json' \
    --header "Authorization: Basic $2" \
    | jq -r '.response.token'
