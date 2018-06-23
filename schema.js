const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');
const fetch = require('node-fetch');

const getUserByUrl = (relativeUrl) => fetch(`${BASE_URL}${relativeUrl}`)
    .then(res => res.json());

const PersonType = new GraphQLObjectType({
    name: 'Person',
    description: 'Describes a person',

    fields: () => ({
        firstName: {
            type: GraphQLString,
            resolve: (person) => person.first_name,
        },
        lastName: {
            type: GraphQLString,
            resolve: (person) => person.last_name,
        },
        email: {
            type: GraphQLString,
            resolve: (person) => person.email,
        },
        nickname: {
            type: GraphQLString,
            resolve: (person) => person.nickname,
        },
        id: {
            type: GraphQLString,
            resolve: (person) => person.id,
        },
        friends: {
            type: new GraphQLList(PersonType),
            resolve: (person) => person.friends.map(getUserByUrl),
        }
    }),
});

const BASE_URL = 'http://localhost:5000';

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
        person: {
            type: PersonType,
            args: {
                id: { type: GraphQLString },
            },
            resolve: (root, args) => getUserByUrl(`/users/${args.id}/`),
        },
    }),
});

module.exports = new GraphQLSchema({
    query: QueryType,
});