#!/usr/bin/env bash

if [ ! -d "node_modules" ]; then
    yarn install
fi

npm run dev
