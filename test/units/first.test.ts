
process.env.TEST_URL_INTEGRATION = 'https://api.magicthegathering.io/v1';

import {expect, request} from '../init'
import 'mocha';

describe("Test API magicthegathering", () => {
    
    it("should receive 100 cards", (done: any) => {
       
            request
                .get('/cards')
                .end((err: any, res: any) => {

                    expect(res.statusCode).to.be.eq(200);
                    expect(res.body.cards).to.be.a('array');

                    done();
            }); 
    });
});