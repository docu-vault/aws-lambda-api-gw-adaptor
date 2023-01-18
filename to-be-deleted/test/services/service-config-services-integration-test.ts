
var chaitest = require('chai');
var should = chaitest.should();
var expect = chaitest.expect;

import { Logger } from "@docudata/logger";
const dataHandler = require('@docudata/api-handler');

//var url = 'https://eg8j3u7jvl.execute-api.us-east-1.amazonaws.com/Stage/config/doctype';
//var url = 'https://fpq0d120t0.execute-api.us-east-1.amazonaws.com/Stage/config/doctype'
//var url = 'https://dn9ni491lg.execute-api.us-east-1.amazonaws.com/Stage/api/internal/config/sc/v1';
//var url = 'https://dn9ni491lg.execute-api.us-east-1.amazonaws.com/Stage/api/internal/config/sc/v1';
var url = 'https://s7o95g8crl.execute-api.us-east-1.amazonaws.com/api/internal/config/sc/v1';

const logger = new Logger('service-config-services-integration-test: ');

var handler = new dataHandler.APIHandler(url);

describe('Service Config API Services Integration Testing... ', function() {

    const payload: any = {
            'bpPK' : "service-config",
            'bpSK' : "service-config",
            'businessEntityNameSingle': 'Loan',
            'businessEntityNamePlurale': 'Loans',
            'baseConfig': "entity-based",
            cBy: 'xyz@yahoo.com',
            cAt:  new Date().toISOString()
    };


    it('create: create new entity config item', async  () => {

        var res =  await handler.add(payload, '/create');
        logger.debug('Result is; ',  JSON.stringify(res));
        expect(res.statusCode).to.equal(200);
    });

    it('get: Get an existing service config', async () => {

        const result = await handler.list(null);
        logger.debug('get result: ', result);
        expect(result.statusCode).to.equal(200);
        //expect(result.businessEntityNameSingle).to.deep.equal(req01.businessEntityNameSingle);
    });


    it('update: Update an existing record  ', async () => {
        const payload =  {
                bpPK : "service-config",
                bpSK : "service-config",
                businessEntityNameSingle: 'Property',
                businessEntityNamePlurale: 'Properties',
                baseConfig: "entity-based",
                services: [],
                uBy: 'xyz@yahoo.com',
                uAt:  new Date().toISOString(),
                userName: "xyz@yahoo.com"
          };
        const result = await handler.update(payload, "update", "service-config");
        logger.debug('result: ', result);
        expect(result.statusCode).to.equal(200);
       
    });



})
