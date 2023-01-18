var chaitest = require('chai');
var should = chaitest.should();
var expect = chaitest.expect;

import { Logger } from "@docudata/logger";
const dataHandler = require('@docudata/api-handler');


var ecUrl = 'https://49np607xbd.execute-api.us-east-1.amazonaws.com/api/internal/config/ec/v1';

const logger = new Logger('business-entity-services-integration-test: ');

const prepare = async () =>
{
    //const ecService = DInjector.entityConfigService;
    //await ecService.deleteAll("config-doc");
    var ecHandler = new dataHandler.APIHandler(ecUrl);
    
    const inp: any = {
        'bpPK' : 'config-doc',
        'bpSK': '1',
        'displayName': 'Entity Id',
        'fieldName': 'bpPK',
        'fieldType': 'SYSTEM',
        'fieldDataType': 'string',
        'display': true,
        description: 'business entity id',
        cBy: 'xyz@yahoo.com',
        uBy: 'xyz@yahoo.com',
        cAt:  new Date().toISOString(),
        uAt: new Date().toISOString()
    };

    try {
        var result: any = await ecHandler.add(inp, "/create");

        inp.displayName = "Doc Type";
        inp.bpSK = "2";
        inp.fieldName = 'doctype',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'string',
        result = await ecHandler.add(inp, "/create");

        inp.displayName = "Created At";
        inp.bpSK = "3";
        inp.fieldName = 'cAt',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'string',
        result = await ecHandler.add(inp, "/create");

        inp.displayName = "Group";
        inp.bpSK = "4";
        inp.fieldName = 'grp',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'string',
        result = await ecHandler.add(inp, "/create");

        inp.displayName = "Status";
        inp.bpSK = "5";
        inp.fieldName = 'status',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'string',
        inp.display = false,
        result = await ecHandler.add(inp, "/create");

        inp.displayName = "Pages";
        inp.bpSK = "6";
        inp.fieldName = 'pages',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'string',
        inp.display = true,
        result = await ecHandler.add(inp, "/create");

        inp.displayName = "Storage ID";
        inp.bpSK = "7";
        inp.fieldName = 'storageId',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'string',
        inp.display = false,
        result = await ecHandler.add(inp, "/create");

        inp.displayName = "File Format";
        inp.bpSK = "8";
        inp.fieldName = 'fft',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'string',
        inp.display = false,
        result = await ecHandler.add(inp, "/create");

        inp.displayName = "Size";
        inp.bpSK = "9";
        inp.fieldName = 'sz',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'string',
        inp.display = false,
        result = await ecHandler.add(inp, "/create");

        inp.displayName = "Last Modified";
        inp.bpSK = "993";
        inp.fieldName = 'uAt',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'date',
        inp.display = true,
        result = await ecHandler.add(inp, "/create");

        inp.displayName = "Modified By";
        inp.bpSK = "994";
        inp.fieldName = 'uBy',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'date',
        inp.display = true,
        result = await ecHandler.add(inp, "/create");

        inp.displayName = "Created By";
        inp.bpSK = "996";
        inp.fieldName = 'cBy',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'date',
        inp.display = true,
        result = await ecHandler.add(inp, "/create");

    } catch (err)
    {
        logger.error('Error Preparing Data before tests: ', err);
    }
}


describe('Document Entity Config Seed Data ... ', function() {

    before (async () =>{
        await prepare();
    });

    
    it('Sample to get the prepare run',  async function() {
        console.log('passed..');
    });
    

  
});