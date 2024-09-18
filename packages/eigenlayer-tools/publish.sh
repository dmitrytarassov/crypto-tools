#!/bin/sh

rm -rf dist/*

yarn build

cp package.json dist/
cp README.md dist/
cp ../../LICENSE dist

cd dist

npm pack --dry-run

yarn publish
