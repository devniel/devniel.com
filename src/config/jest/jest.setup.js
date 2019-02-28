import { queryMock, GRAPHQL_API_URL } from 'Client/__testUtils__/queryMock';

global.fetch = require('node-fetch');

queryMock.setup(GRAPHQL_API_URL);
