const networkFetchQuery = require('./networkFetchQuery');
const testQuery = require('./testQuery');

module.exports = function ({
  fetchQuery,
  Environment,
  RecordSource,
  Store,
  Network
}) {
  const source = new RecordSource();
  const store = new Store(source);
  const network = Network.create(networkFetchQuery);
  const environment = new Environment({
    network,
    store,
  });

  return fetchQuery(
    environment,
    testQuery,
    {}
  );
}