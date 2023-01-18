

/*
let chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;
*/

var chaitest = require('chai');
var should = chaitest.should();
var expect = chaitest.expect;

import { Logger } from "@docudata/logger";
const dataHandler = require('@docudata/api-handler');

//var url = 'https://eg8j3u7jvl.execute-api.us-east-1.amazonaws.com/Stage/config/doctype';
//var url = 'https://fpq0d120t0.execute-api.us-east-1.amazonaws.com/Stage/config/doctype'
//var url = 'https://l0buxsvgzl.execute-api.us-east-1.amazonaws.com/Stage/api/internal/config/doctype/v1';
var url = 'https://98fx9xd84m.execute-api.us-east-1.amazonaws.com/api/internal/config/doctype/v1';
const logger = new Logger('test-services');


describe('DocType Services Integration (end to end) testing ', function() {


    describe('createDocType: Creat a new doc type', function() {
        it('New DocType 1: Should return statusCode of 200',  async function() {
    
            const payload = {
                    "bpSK" : "BOFA Bank Statement",
                    "grp": 'Bank Statements',
                    "description": 'Bank statement from Bank of America',
                    "cBy": 'xyz@domain.com',
            }

            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.add(payload, '/create');
            logger.debug('Result is; ',  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });

        it('New Docype 2: Should return statusCode of 200',  async function() {
    
            const payload = {
                    "bpSK" : "Eletricity Bill",
                    "grp": 'Utility Bills',
                    "description": 'Utility Bill',
                    "cBy": 'xyz@domain.com',
            }

            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.add(payload, '/create');
            logger.debug('Result is; ',  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });

        it('New Docype 3: Should return statusCode of 200',  async function() {
    
            const payload = {
                    "bpSK" : "Verizon Mobile Statement",
                    "grp": 'Utility Bills',
                    "description": 'Mobile Bill',
                    "cBy": 'xyz@domain.com',
            }

            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.add(payload, '/create');
            logger.debug('Result is; ',  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });

    });


    describe('list: List all the doc types', function() {
        it('Should return statusCode of 200',  async function() {
            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.list(null);
            logger.debug('Result is; ', JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });
    });

    describe('getDocType: get an existing doc type', function() {
        it('Should return statusCode of 200',  async function() {
            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.get(null, "BOFA Bank Statement");
            logger.debug('Result is; ', JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });
    });

    describe('UpdateDocType: Update an existing Item', function() {
        it('Should return statusCode of 200',  async function() {
            //this.timeout(100000);
            let updatedAt = new Date().toDateString();

            const payload = {
                "description": 'Update Test',
                "grp" : "Bills",
                'uBy': 'xyz@domain.com'
            }

            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.update(payload, 'update', "Verizon Mobile Statement");
            logger.debug('Result is; '+  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });

        it('getDocType: get the updated document and check',  async function() {
            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.get(null, "Verizon Mobile Statement");
            logger.debug('Result is; ', JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
            expect(res.result.description).to.equal('Update Test');
        });

    });

});

