var chaitest = require('chai');
var should = chaitest.should();
var expect = chaitest.expect;

import { Logger } from "@docudata/logger";
const dataHandler = require('@docudata/api-handler');

var url = 'https://98fx9xd84m.execute-api.us-east-1.amazonaws.com/api/internal/config/doctype/v1';

const logger = new Logger('doctypes-seed-data');


describe('DocType Services -- Seed Data', function() {


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

        it('New Docype 4: Should return statusCode of 200',  async function() {
            const payload = {
                    "bpSK" : "W-2",
                    "grp": 'Income',
                    "description": 'W-2 income doc',
                    "cBy": 'xyz@domain.com',
            }
            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.add(payload, '/create');
            logger.debug('Result is; ',  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });

        it('New Docype 4: Should return statusCode of 200',  async function() {
            const payload = {
                    "bpSK" : "W-2",
                    "grp": 'Income',
                    "description": 'W-2 income doc',
                    "cBy": 'xyz@domain.com',
            }
            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.add(payload, '/create');
            logger.debug('Result is; ',  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });

        it('New Docype 4: Should return statusCode of 200',  async function() {
            const payload = {
                    "bpSK" : "1040",
                    "grp": 'Income',
                    "description": 'Tax Documents',
                    "cBy": 'xyz@domain.com',
            }
            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.add(payload, '/create');
            logger.debug('Result is; ',  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });

        it('New Docype 5: Should return statusCode of 200',  async function() {
            const payload = {
                    "bpSK" : "PSA",
                    "grp": 'Closing',
                    "description": 'Sale agreement',
                    "cBy": 'xyz@domain.com',
            }
            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.add(payload, '/create');
            logger.debug('Result is; ',  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });


    });





});

