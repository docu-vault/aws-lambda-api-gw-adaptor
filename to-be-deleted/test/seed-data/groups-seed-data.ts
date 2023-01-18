const {Logger} = require('@docudata/logger');
const dataHandler = require('@docudata/api-handler');


var chaitest = require('chai');
var should = chaitest.should();
var expect = chaitest.expect;


var url = 'https://moau1fdnbg.execute-api.us-east-1.amazonaws.com/api/internal/config/group/v1';

const logger = new Logger('group-seed-data');


describe('List: Groups ', function() {
   

        it('create: create new group',  async function() {
            //this.timeout(100000);
            let updatedAt = new Date().toISOString;

            const payload = {
                "bpSK": 'Mortgage',
                "cBy": 'bxxx@yahoo.com',
                "description": 'Mortgage  Related Documents group'
            }

            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.add(payload, '/create');
            logger.debug('Result is; ',  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });



        it('create: create new group - Income',  async function() {
            //this.timeout(100000);
            let updatedAt = new Date().toISOString;

            const payload = {
                "bpSK": 'Income',
                "cBy": 'xyz@yahoo.com',
                "description": 'Income Documents'
            }

            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.add(payload, '/create');
            logger.debug('Result is; ',  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });

        it('create: create new group - Loan Application',  async function() {
            //this.timeout(100000);
            let updatedAt = new Date().toISOString;

            const payload = {
                "bpSK": 'Loan Application',
                "cBy": 'aaaa@yahoo.com',
                "description": 'Loan Application Related'
            }

            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.add(payload, '/create');
            logger.debug('Result is; ',  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });

        it('create: create new group - Closing',  async function() {
            //this.timeout(100000);
            let updatedAt = new Date().toISOString;

            const payload = {
                "bpSK": 'Closing',
                "cBy": 'aaa@yahoo.com',
                "description": 'Closing Documents'
            }

            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.add(payload, '/create');
            logger.debug('Result is; ',  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });

});

