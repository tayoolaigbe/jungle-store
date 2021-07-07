const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type MainCard {
		title: String!
		image: String!
	}

	type Query {
		books: [Book]
		mainCards: [MainCard]
	}
`;

const books = [
	{
		title: 'The Awakening',
		author: 'Kate Chopin',
	},
	{
		title: 'City of Glass',
		author: 'Paul Auster',
	},
];

const mainCards = [
	{
		title: 'Recently Viewed',
		image: 'Lion',
	},
	{
		title: 'Looking for a Gift',
		image: 'Penguin',
	},
	{
		title: 'Best Behaved',
		image: 'Cat',
	},
];

const resolvers = {
	Query: {
		books: () => books,
		mainCards: () => mainCards,
	},
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
