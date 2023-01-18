const Bottle = require('bottlejs');

import {StorageS3Repo} from '@docudata/dd-storage';
import {StorageService} from '@docudata/dd-storage';

var AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });

var s3 = new AWS.S3({'region' : 'us-east-1', signatureVersion: 'v4'});
const bottle = new Bottle();
bottle.constant('S3', s3);
bottle.service('storageRepository', StorageS3Repo, 'S3');
bottle.service('storageService', StorageService, 'storageRepository')


module.exports = bottle.container;