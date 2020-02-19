import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

export const assert = chai.assert;
export const expect = chai.expect;
export const request = chai.request(process.env.TEST_URL_INTEGRATION);
export const should = chai.should;