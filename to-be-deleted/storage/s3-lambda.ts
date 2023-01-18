import {APIGatewayProxyEvent} from "aws-lambda";

// all required dependency services are packed in this module.
const DInjector = require('./../../utils/app-config');
const {wrapper} = require('@docudata/aws-utils');
//const {Logger} = require('@docudata/logger');
import { Logger } from "@docudata/logger";

const logger = new Logger('s3-lamdba: ');

const Bottle = require('bottlejs');


export const getUploadSignedUrl = wrapper(
    async (event: APIGatewayProxyEvent
  ) => {
    logger.debug('getUploadSignedUrl: event received is: ', JSON.stringify(event));
    const request = event.body;
    logger.debug('getUploadSignedUrl: request (event.body) : ', JSON.stringify(request));
    return DInjector.storageService.getUploadSignedUrl(request);
  });

  export const getDownloadSignedUrl  = wrapper (
    async ( event: any) => {
      logger.debug('getDownloadSignedUrl: Event Received is: ' , JSON.stringify(event));
      const request = event.body;
      return DInjector.getDownloadSignedUrl.get(request);
    }
  );
  