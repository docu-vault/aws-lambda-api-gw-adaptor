
var chaitest = require('chai');
var should = chaitest.should();
var expect = chaitest.expect;

import { Logger } from "@docudata/logger";
const dataHandler = require('@docudata/api-handler');

var url = 'https://s7o95g8crl.execute-api.us-east-1.amazonaws.com/api/internal/config/sc/v1';

const logger = new Logger('service-config-seed-data: ');

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

})
