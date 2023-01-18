#!/bin/bash

LAYER_BASE=.
LAYER_DEST=./dist


echo '--> Preparing common nodejs layer layer..'
cd $LAYER_BASE
#echo "--> Running npm install --production from `pwd`"
# npm install --production


# create Layer 
# if test -d "$LAYER_DEST" ; then
#    echo "----> Directory $LAYER_DEST exists and is being removed..."
#    rm -rf $LAYER_DEST
# fi

echo "-->Creating $LAYER_DEST ..."
mkdir -p $LAYER_DEST/nodejs
echo "--> Copying $LAYER_BASE/node_modules to $LAYER_DEST/nodejs/node_modules.."
cp -r $LAYER_BASE/node_modules $LAYER_DEST/nodejs/node_modules
chmod 644 $(find $LAYER_DEST/nodejs -type f)
chmod 755 $(find $LAYER_DEST/nodejs  -type d)


echo '--> Done..'