
var chaitest = require('chai');
var should = chaitest.should();
var expect = chaitest.expect;

import { Logger } from "@docudata/logger";
//import { SSL_OP_PKCS1_CHECK_2 } from "node:constants";
const dataHandler = require('@docudata/api-handler');

var url = 'https://5vgqlnlshb.execute-api.us-east-1.amazonaws.com/Stage/api/public/be/v1';
var ecUrl = 'https://vyy8djz8r4.execute-api.us-east-1.amazonaws.com/Stage/api/internal/config/ec/v1';

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

describe('Business Entity API Test Cases ... ', function() {

    var handler = new dataHandler.APIHandler(url);

    
    before (async () =>{
        await prepare();
    });
    

    const req = {
            bpPK: '123499999',
            'tag-1': 'Tag 11',
            'tag-2': 'Tag 21',
            'tag-3': 'Tag 31',
            status: 'created',
            docCount: '1',
            cAt: new Date().toISOString(),
            cBy: 'xyz@yahoo.com',
            gs1SK: new Date().toISOString(),
            bpSK: 'be-entity'
    };


    it('createBusinessEntity: Create a Business Entity Item', async () => {
        var res =  await handler.add(req, '/create');
        logger.debug('Result is; ',  JSON.stringify(res));
        expect(res.statusCode).to.equal(200);
    });

    it('getBusinessEntity: get an existing Business Entity Item', async () => {
        var res =  await handler.get("123499999");
        logger.debug('Result is; ',  JSON.stringify(res));
        expect(res.statusCode).to.equal(200);
    });

    
    it('createBusinessEntity: Create 30 Business Entity Records via Create API', async () => {
        var errMessage : string = '';
        var result : any ;
        var id : number = 12342000000;
        var i : number = 0;

        try {
            for ( i=0; i<30; i++)
            {
                req.bpPK = id.toString();
                id += 1;
                console.log(`i= ${i} id= ${id} and bpPK: ${req.bpPK}`);
                result =  await handler.add(req, '/create');
            }
        } catch (err)
        {
            errMessage = err.message;
        }
        //logger.debug('result..: ', result);
        expect(errMessage).to.deep.equal('');
    });

    it('listBusinessEntities: list them by page size iterating multiple times', async () => {

        var payload = { 
            queryStringParameters: {
                lastKey : null,
                pageSize: 10
            }
        }
        var res =  await handler.getWithPayload(null,null,payload);
        console.log('here');
        //var res1 = JSON.parse(res);
        logger.debug('Result is; ',  res);
        logger.debug('result.count: ', res.result.Count);
        logger.debug('result.lastkey: ', res.result.LastEvaluatedKey);
        expect(res.statusCode).to.equal(200);

        var LastEvaluatedKey: any = res.result.LastEvaluatedKey;
        var i : number = 1;
        console.log('before while ...');
        while ( LastEvaluatedKey) 
        {
            console.log('listBusinessEntities iteration: ', i);
            i++;
            logger.debug('in iteraton: ', LastEvaluatedKey);
            payload = {
                queryStringParameters: {
                    lastKey : LastEvaluatedKey,
                    pageSize : 10
                }
            };

            logger.debug('event passed: ', payload);
            res =  await handler.getWithPayload(null,null,payload);
            console.log('result: ', res);
            LastEvaluatedKey = res.result.LastEvaluatedKey;
        }
        expect(i).to.be.above(2);

    });

});