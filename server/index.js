const { ApolloServer } = require('apollo-server');
const { mainCards, animals, categories } = require('./db');
const typeDefs = require('./schema.js');
const Query = require('./resolvers/Query');
const Category = require('./resolvers/Category');
const Animal = require('./resolvers/Animal');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
		Animal,
		Category,
	},
	context: {
		mainCards,
		animals,
		categories,
	},
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
