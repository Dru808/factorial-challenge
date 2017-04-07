/*jshint esversion: 6*/

function factorialChallenge(n) {

  if(n === 1) {
    return n;
  }

  return n * factorialChallenge(n - 1);
}

module.exports = factorialChallenge;