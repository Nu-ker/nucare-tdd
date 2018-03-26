'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

let inputUser = {
	name: 'Testing Create field',	
	email: 'Testing Create field',
	height: 170,
	weight: 50,
	age: 25,
	sex: 'male',
	status: true,	
	activity: 1.2,
};

describe('Create User API: POST', () => {	
	it('should generate a generic application response', (done) => {
		chai.request('https://us-central1-nu-ker-fox.cloudfunctions.net/User')
		.post('/')
		.set('uid', '00001')
		.type('form')
		.send(inputUser)
		.end((err, response) => {
				expect(response.status).to.equal(00);
				expect(err).to.be.null;
				done();
			})
	});
});

