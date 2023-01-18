
var chaitest = require('chai');
var should = chaitest.should();
var expect = chaitest.expect;

import { Logger } from "@docudata/logger";
const dataHandler = require('@docudata/api-handler');

var ecUrl  = 'https://49np607xbd.execute-api.us-east-1.amazonaws.com/api/internal/config/ec/v1';

const logger = new Logger('business-entity-services-integration-test: ');



const prepare = async () =>
{

    var ecHandler = new dataHandler.APIHandler(ecUrl);

    
    const inp: any = {
            'bpPK' : "config-be",
            'bpSK': '1',
            'displayName': 'Entity ID',
            'fieldName': 'bpPK',
            'fieldType': 'CUSTOM',
            'fieldDataType': 'string',
            'display': true,
            description: 'Business Entity ID. must be unique',
            cBy: 'xyz@yahoo.com',
            uBy: 'xyz@yahoo.com',
            cAt:  new Date().toISOString(),
            uAt: new Date().toISOString()
    };

    try {
        var result =  await ecHandler.add(inp, '/create');

        inp.displayName = "Tag 1";
        inp.bpSK = "2";
        inp.fieldName = 'tag-1',
        inp.fieldType = 'CUSTOM',
        inp.fieldDataType = 'string',
        result = await ecHandler.add(inp, '/create');

        inp.displayName = "Tag 2";
        inp.bpSK = "3";
        inp.fieldName = 'tag-2',
        inp.fieldType = 'CUSTOM',
        inp.fieldDataType = 'string',
        result = await ecHandler.add(inp, '/create');

        inp.displayName = "Tag 3";
        inp.bpSK = "4";
        inp.fieldName = 'tag-3',
        inp.fieldType = 'CUSTOM',
        inp.fieldDataType = 'string',
        result = await ecHandler.add(inp, '/create');

        inp.displayName = "Status";
        inp.bpSK = "991";
        inp.fieldName = 'status',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'string',
        inp.display = false,
        result = await ecHandler.add(inp, '/create');

        inp.displayName = "Document Count";
        inp.bpSK = "992";
        inp.fieldName = 'docCount',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'string',
        inp.display = true,
        result = await ecHandler.add(inp, '/create');

        inp.displayName = "Last Modified";
        inp.bpSK = "993";
        inp.fieldName = 'uAt',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'date',
        inp.display = true,
        result = await ecHandler.add(inp, '/create');

        inp.displayName = "Modified By";
        inp.bpSK = "994";
        inp.fieldName = 'uBy',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'date',
        inp.display = true,
        result = await ecHandler.add(inp, '/create');

        inp.displayName = "Created Date";
        inp.bpSK = "995";
        inp.fieldName = 'cAt',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'date',
        inp.display = true,
        result = await ecHandler.add(inp, '/create');

        inp.displayName = "Created By";
        inp.bpSK = "996";
        inp.fieldName = 'cBy',
        inp.fieldType = 'SYSTEM',
        inp.fieldDataType = 'date',
        inp.display = true,
        result = await ecHandler.add(inp, '/create');

    } catch (err)
    {
        logger.error('Error Preparing Data before tests: ', err);
    }
    
    
}

describe('Business Entity Configuration Seed Data ... ', function() {

    //var handler = new dataHandler.APIHandler(url);

    
    before (async () =>{
        await prepare();
    });

    it('Sample to get the prepare run',  async function() {
        console.log('passed..');
    });
    

});