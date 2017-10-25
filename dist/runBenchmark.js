const networkFetchQuery = require('./networkFetchQuery');
const testQuery = require('./testQuery');

module.exports = async function ({
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
    store
  });

  const data = await fetchQuery(environment, testQuery, {});

  return data;
};