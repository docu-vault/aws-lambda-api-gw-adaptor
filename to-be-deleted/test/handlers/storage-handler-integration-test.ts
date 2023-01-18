import { Logger } from "@docudata/logger";
const {getUploadSignedUrl, getDownloadSignedUrl} = require('../../src-ts/adaptors/storage/s3-lambda');

var chaitest = require('chai');
var should = chaitest.should();
var expect = chaitest.expect;


const logger = new Logger(' storage-handler-integration-test.ts: ');


describe('Storage Handler Testing without APIGateway', function() {

    //const beService = DInjector.businessEntityService;
    //const docService = DInjector.documentService;


    const req = {
        body : {
            'key': 'test10.pdf'
        }
    };
  
    it('getUploaduRL: getUploadURL for test10.odf', async () => {
        const result = await getUploadSignedUrl(req)
        logger.debug('result is: ', result);
        expect(result.statusCode).to.equal(200);
        const temp : any = JSON.parse(result.body);
        //docId = temp.bpSK;
        logger.info('signed url to upload is: ', temp);
    });

});


