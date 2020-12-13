yarn tsc
cp publish-package.json ./dist/package.json
cd ./dist
yarn publish --non-interactive
