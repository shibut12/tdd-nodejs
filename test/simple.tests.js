'use strict';

const mocha = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
chai.should();

describe('A simple test suite', function(){
    it('a simple test', function(){
        true.should.be.true;
    });
});