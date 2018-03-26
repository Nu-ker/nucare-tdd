'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);
const uid = '65e7cf5';

describe('Get All Food API: GET', () => {	
	
	it('should generate a generic application response', (done) => {
		chai.request('https://us-central1-nu-ker-fox.cloudfunctions.net/Food')
		.get('/')
		.set('uid', `${uid}`)
		.end((err, response) => {
			if (err) {
				return done(err);
			}
			const appResponse = response.body;									
			let result =Object.values(appResponse)
			expect(err).to.be.null;
			expect(response.status).to.equal(200);  
			should.exist(appResponse);
			appResponse.should.be.an('object');
			done();
		});
	});

	// it('should have right property', (done) => {
	// 	chai.request('https://us-central1-nu-ker-fox.cloudfunctions.net/User')
  //   .get('/')
	// 	.end((err, response) => {
	// 		if (err) {
	// 			return done(err);
	// 		}
	// 		const appResponse = response.body;									
	// 		let result =Object.values(appResponse)
	// 		expect(err).to.be.null;			
	// 		expect(['activity']).to.eql(['activity']);
	// 		expect(['age']).to.eql(['age']);
	// 		expect(['calories']).to.eql(['calories']);
	// 		expect(['dates']).to.eql(['dates']);
	// 		expect(['email']).to.eql(['email']);
	// 		expect(['height']).to.eql(['height']);
	// 		expect(['name']).to.eql(['name']);
	// 		expect(['sex']).to.eql(['sex']);
	// 		expect(['status']).to.eql(['status']);
	// 		expect(['weight']).to.eql(['weight']);						
	// 		done();
	// 	});
	// });

});