# Build a zip file with name a version of package.json
# Execute it with 'npm run zip'
WORKING_DIR=$(pwd);
PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]'); PACKAGE_NAME=$(cat package.json | grep name | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]');
TEMPORARY_DIR=$(mktemp -d);
PACKAGE_TEMPDIR="$TEMPORARY_DIR/$PACKAGE_NAME";
mkdir "$PACKAGE_TEMPDIR";
cp -r dist/ "$PACKAGE_TEMPDIR";
pushd "$TEMPORARY_DIR";
zip -r -X "./$PACKAGE_NAME-$PACKAGE_VERSION.zip" "$PACKAGE_NAME";
mv *.zip "$WORKING_DIR/";
