#!/bin/bash

LAYER_BASE=.
LAYER_DEST=./dist


echo '--> Preparing common nodejs layer layer..'
cd $LAYER_BASE
#echo "--> Running npm install --production from `pwd`"
# npm install --production


# create Layer 
if test -d "$LAYER_DEST" ; then
    echo "----> Directory $LAYER_DEST exists and is being removed..."
    rm -rf $LAYER_DEST
fi