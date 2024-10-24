#!/bin/bash

# Ignore history from export Doppler token
export HISTIGNORE="export DOPPLER_TOKEN"

# Export Doppler token
export DOPPLER_TOKEN=$1

# Run doppler provided by our service token with docker compose command
doppler run -- docker compose up -d --build