/*jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const factorialChallenge = require('../factorialChallenge.js');

describe('factorialChallenge', () => {
  it('should be a function', () => {
    expect(factorialChallenge).to.be.a('function');
  });

  it('should fin the factorial of a number', () => {
    expect(factorialChallenge(4)).to.equal(24);
  });
});