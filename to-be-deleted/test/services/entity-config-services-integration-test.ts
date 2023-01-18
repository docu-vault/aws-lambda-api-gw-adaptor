
var chaitest = require('chai');
var should = chaitest.should();
var expect = chaitest.expect;

import { Logger } from "@docudata/common-utils";
//import { SSL_OP_PKCS1_CHECK_2 } from "node:constants";
const dataHandler = require('@docudata/api-handler');

//var url = 'https://vyy8djz8r4.execute-api.us-east-1.amazonaws.com/Stage/api/internal/config/ec/v1';
var url = 'https://49np607xbd.execute-api.us-east-1.amazonaws.com/api/internal/config/ec/v1';

const logger = new Logger('entity-config-services-integration-test: ');

var handler = new dataHandler.APIHandler(url);

describe('Entity Config API Test Cases ... ', function() {

    const payload: any = {
        'bpPK' : "config-be",
        'bpSK': '1000',
        'displayName': 'Entity ID',
        'display': true,
        'fieldName' : 'Entity ID',
        'fieldType' : "CUSTOM",
        'fieldDataType' : '',
        description: 'Entity Name',
        cBy: 'xyz@yahoo.com',
        uBy: 'xyz@yahoo.com',
        cAt:  new Date().toISOString(),
        uAt: new Date().toISOString()
    };

    const payload001: any = {
        'bpPK' : "config-doc",
        'bpSK': '2000',
        'displayName': 'Document Type',
        'display': true,
        'fieldName' : 'DocType',
        'fieldType' : "CUSTOM",
        'fieldDataType' : '',
        description: 'Document Type',
        cBy: 'xyz@yahoo.com',
        uBy: 'xyz@yahoo.com',
        cAt:  new Date().toISOString(),
        uAt: new Date().toISOString()
    };

    const payload002: any = {
        'bpPK' : "config-doc",
        'bpSK': '2001',
        'displayName': 'Document Group',
        'display': true,
        'fieldName' : 'grp',
        'fieldType' : "CUSTOM",
        'fieldDataType' : '',
        description: 'Document Type group',
        cBy: 'xyz@yahoo.com',
        uBy: 'xyz@yahoo.com',
        cAt:  new Date().toISOString(),
        uAt: new Date().toISOString()
    };

    
    it('create: create new business entity config item', async  () => {
        var res =  await handler.add(payload, '/create');
        logger.debug('Result is; ',  JSON.stringify(res));
        expect(res.statusCode).to.equal(200);
    });

    it('create: create new business entity config item', async  () => {
        var pl2 : any = {...payload};
        pl2.bpSK = '1001';
        pl2.displayName = 'status';
        pl2.display = true;
        pl2.fieldName = 'status';
        pl2.fieldType = "string";

        var res =  await handler.add(pl2, '/create');
        logger.debug('Result is; ',  JSON.stringify(res));
        expect(res.statusCode).to.equal(200);
    });

    it('beconfig: Get business entity configuration...', async  () => {
        var res =  await handler.list("/beconfig");
        logger.debug('Result is; ',  JSON.stringify(res));
        expect(res.statusCode).to.equal(200);
    });

    it('create: (1) create new document config item', async  () => {
        var res =  await handler.add(payload001, '/create');
        logger.debug('Result is; ',  JSON.stringify(res));
        expect(res.statusCode).to.equal(200);
    });
    it('create: (2) create new document config item', async  () => {
        var res =  await handler.add(payload002, '/create');
        logger.debug('Result is; ',  JSON.stringify(res));
        expect(res.statusCode).to.equal(200);
    });
    
    it('beconfig: Get document entity configuration...', async  () => {
        var res =  await handler.list("/docconfig");
        logger.debug('Result is; ',  JSON.stringify(res));
        expect(res.statusCode).to.equal(200);
    });


    it('getEntityConfig: Get a given Business Entity config by its display name and key...', async  () => {
        var params : any =  {
            bpPK : "config-be",
            bpSK : '1000',
            headers : { test2 : '100111'}
        }
        var res =  await handler.getWithPayload(null, "Entity ID", params);
        logger.debug('Result is; ',  JSON.stringify(res));
        expect(res.statusCode).to.equal(200);
    });

    it('getEntityConfig: Get a given document config by its display name and key...', async  () => {
        var params : any =  {
            bpPK : "config-doc",
            bpSK : '2001',
            headers : { test : '100111'}
        }
        var res =  await handler.getWithPayload(null, "Document Group", params);
        logger.debug('Result is; ',  JSON.stringify(res));
        expect(res.statusCode).to.equal(200);
    });


});