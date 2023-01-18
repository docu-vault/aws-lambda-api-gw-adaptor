const {Logger} = require('@docudata/logger');
const dataHandler = require('@docudata/api-handler');

/*
let chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;
*/

var chaitest = require('chai');
var should = chaitest.should();
var expect = chaitest.expect;


//var url = 'https://06eyxyolt4.execute-api.us-east-1.amazonaws.com/Stage/config/group';
//var url = 'https://fpq0d120t0.execute-api.us-east-1.amazonaws.com/Stage/api/internal/config/group';
//var url = 'https://fpq0d120t0.execute-api.us-east-1.amazonaws.com/Stage/api/internal/config/group';
//var url = 'https://piu655j42j.execute-api.us-east-1.amazonaws.com/Stage/api/internal/config/group/v1';
var url = 'https://moau1fdnbg.execute-api.us-east-1.amazonaws.com/api/internal/config/group/v1';
const logger = new Logger('test-services');


describe('List: Groups ', function() {
   
        it('list: Should return statusCode of 200',  async function() {
            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.list(null);
            logger.debug('Result is; ', JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });

        it('create: create new group',  async function() {
            //this.timeout(100000);
            let updatedAt = new Date().toISOString;

            const payload = {
                "bpSK": 'Mortgage Documents',
                "cBy": 'brahmeswara@yahoo.com',
                "description": 'Mortgage  Related Documents group'
            }

            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.add(payload, '/create');
            logger.debug('Result is; ',  JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });

        it('get: fetch newly created group by name',  async function() {
            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.get(null, "Mortgage Documents");
            logger.debug('Result is; ', JSON.stringify(res));
            expect(res.statusCode).to.equal(200);
        });
        it('update: Should return statusCode of 200',  async function() {
            //this.timeout(100000);
            let updatedAt = new Date();

            const payload = {
                "uBy": 'brahmeswara@yahoo.com',
                "description": 'Mortgage  Related Documents group upd',
                "uAt" : updatedAt
            }

            var handler = new dataHandler.APIHandler(url);
            var res =  await handler.update(payload, 'update', "Mortgage Documents");
            logger.debug('Result is; '+  JSON.stringify(res));
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

