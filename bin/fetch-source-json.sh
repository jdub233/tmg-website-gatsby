#!/bin/bash

mkdir data

TRACKR_BEARER_TOKEN=$(./bin/auth-endpoints/auth-trackr.sh $1 $2)

## Trackr tables
echo 'Getting awards...'
./bin/data-endpoints/awards.sh $1 $TRACKR_BEARER_TOKEN
echo

echo 'Getting events...'
./bin/data-endpoints/events.sh $1 $TRACKR_BEARER_TOKEN
echo

echo 'Getting papers...'
./bin/data-endpoints/papers.sh $1 $TRACKR_BEARER_TOKEN
echo

echo 'Getting papers...'
./bin/data-endpoints/papers.sh $1 $TRACKR_BEARER_TOKEN
echo

echo 'Getting people...'
./bin/data-endpoints/people.sh $1 $TRACKR_BEARER_TOKEN
echo

echo 'Getting press...'
./bin/data-endpoints/press.sh $1 $TRACKR_BEARER_TOKEN
echo

echo 'Getting projects...'
./bin/data-endpoints/projects.sh $1 $TRACKR_BEARER_TOKEN
echo

## Assets table
TRACKR_ASSETS_BEARER_TOKEN=$(./bin/auth-endpoints/auth-trackr-assets.sh $1 $2)

echo 'Getting assets...'
./bin/data-endpoints/assets.sh $1 $TRACKR_ASSETS_BEARER_TOKEN
echo
