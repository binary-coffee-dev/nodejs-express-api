const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../app');

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
