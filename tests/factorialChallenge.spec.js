/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const factorialChallenge = require('../factorialChallenge.js');

describe('factorialChallenge', () => {
  it('should be a function', () => {
    expect(factorialChallenge).to.be.a('function');
  });

  it('should find the factorial of a number', () => {
    expect(factorialChallenge(4)).to.equal(24);
    expect(factorialChallenge(100).to.equal(25003184954859.51));
    expect(factorialChallenge(6).to.equal(720));
  });
});