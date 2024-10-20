#!/bin/bash

# Ignore history from doppler run commands
export HISTIGNORE='doppler run*'

# Run doppler provided by our service token with docker compose command
doppler run --token=$1 -- docker compose up -d --build