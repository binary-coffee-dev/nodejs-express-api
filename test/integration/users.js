import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../app';

chai.use(chaiHttp);

const expect = chai.expect;

describe('Users controller', () => {
    it('should get the list of users', (done) => {
        chai.request(app)
            .get('/users')
            .end((err, res) => {
                expect(res.body).to.be.an('array');
                done();
            });
    });
});
