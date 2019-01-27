const Benchmark = require('benchmark');
const Relay = require('relay-runtime');
const ForkedRelay = require('forked-relay-runtime');
const runBenchmark = require('./dist/runBenchmark');
const suite = new Benchmark.Suite;

process.on('unhandledRejection', e => console.error(e));

// add tests 
suite
  .add('Relay: inlineRequires: true', {
    defer: true,
    fn(deferred) {
      runBenchmark(Relay)
        .then(() => deferred.resolve());
    }
  })
  .add('Relay: inlineRequires: false', {
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
