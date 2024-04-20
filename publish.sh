#!/bin/sh

yarn build

cp package.json dist/
cp README.md dist/
cp tsconfig.json dist/

cd dist

npm pack --dry-run

yarn publish; rm package.json; rm README.md; rm tsconfig.json
