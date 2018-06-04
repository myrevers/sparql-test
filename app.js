const SparqlClient = require('sparql-client-2');
const SPARQL = SparqlClient.SPARQL;
const endpoint = 'http://dbpedia.org/sparql';

const city = 'Vienna';

// Get the leaderName(s) of the given city
const query =
  SPARQL`PREFIX db: <http://dbpedia.org/resource/>
  PREFIX dbpedia: <http://dbpedia.org/ontology/>
  SELECT ?height ?length
  FROM <http://dbpedia.org>
  WHERE {
  db:Nissan_Micra__Third_generation_K12__1 dbpedia:height ?height .
  db:Nissan_Micra__Third_generation_K12__1 dbpedia:length ?length
  }
  LIMIT 10`;

const client = new SparqlClient(endpoint)
  .register({db: 'http://dbpedia.org/resource/'})
  .register({dbpedia: 'http://dbpedia.org/property/'});

client.query(query)
  .execute()
  .then(function (results) {
    // console.dir(results, {depth: null});
    // console.log(results.bindings[0].height.value);
    // console.log(results.results.bindings[0].height.value);
    console.log(results.results.bindings[0]);
  })
  .catch(function (error) {
    // Oh noes! 🙀
  });