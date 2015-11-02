/* global describe, it */

var expect = require('chai').expect
var matchete = require('../matchete')

describe('matchete', function () {
  it('should match full words', function () {
    expect(matchete('foobar baz boz', 'foobar')).to.be.true
  })

  it('should match partial words', function () {
    expect(matchete('foobar baz boz', 'foo')).to.be.true
  })

  it('should match multiple partial words', function () {
    expect(matchete('foobar baz boz', 'foo ba bo')).to.be.true
  })

  it('should not match words if they are in the wrong order', function () {
    expect(matchete('foobar baz boz', 'foo bo ba')).to.be.false
  })

  it('should be case insensitive', function () {
    expect(matchete('FoObaR', 'foobar')).to.be.true
    expect(matchete('foobar', 'FoObaR')).to.be.true
  })

  it('should still work if input contains multiple spaces', function () {
    expect(matchete('foobar baz', '  foo  ba  ')).to.be.true
    expect(matchete('foobar baz', '  ba  foo ')).to.be.false
  })
})
