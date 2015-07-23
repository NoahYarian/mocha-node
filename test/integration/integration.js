#!/usr/bin/env node

var cp = require('child_process');
var should = require('chai').should();

describe('CLI', function() {
  it('should thank me for downloading', function(done) {
    cp.execFile('./app.js', function(err, stdout) {
      console.log(err);
      console.log(stdout);
      stdout.should.equal('Thanks for downloading!\n');
      done();
    });
  });
});
