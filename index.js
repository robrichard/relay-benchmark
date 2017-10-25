const Benchmark = require('benchmark');
const Relay = require('relay-runtime');
const ForkedRelay = require('dibs-relay-runtime-server');
const runBenchmark = require('./dist/runBenchmark');
const suite = new Benchmark.Suite;

process.on('unhandledRejection', e => console.error(e));

// add tests 
suite
  .add('Standard Relay', {
    defer: true,
    fn(deferred) {
      runBenchmark(Relay)
        .then(() => deferred.resolve());
    }
  })
  .add('Forked Relay', {
    defer: true,
    fn(deferred) {
      runBenchmark(ForkedRelay)
        .then(() => deferred.resolve());
    }
  })
  // add listeners 
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async 
  .run({ 'async': true });