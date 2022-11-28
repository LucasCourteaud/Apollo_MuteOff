import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://muteoff-api-sandbox.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVFSGFkR2wwbW5BbTFmYnVPQUNQMiJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLWRldi1tdXRlb2ZmLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNjQzOTYwOTY2MTgzNTM5NDU3NSIsImF1ZCI6Imh0dHBzOi8vYWNjb3VudHMtZGV2Lm11dGVvZmYiLCJpYXQiOjE2Njk1MzQwMzQsImV4cCI6MTY2OTYyMDQzNCwiYXpwIjoiYmNjMDNmcXhPNG5YYVp0ZFd4VER0MHI4T0NpbVcwMWIiLCJzY29wZSI6Im9mZmxpbmVfYWNjZXNzIiwicGVybWlzc2lvbnMiOltdfQ.CBSPJ_kf0UImGrEuJVGtWX_2UwJyFnvDPLxiQmhlvcmhq3-MqAcWuvEGSQ4OfhZJ1UrQQY_nYuQdD78oVpYG8tF4RNP8tE7Okb9VKcgHzIWBD5HYDDsXCpU4hERUm14E4s4Dpp9DNNvXaXn7O-oKHvO-5fv7TjCox85YFxL1BQod5h4rsjKkWwt0OSeWMRB9L3sefgu2gXecvrm--ewUGsXgV3s6EElQFBMYl21sdO78S9MXPjSZSXF5xoT5lHvKarbLEjKWFEe4S4nrF4-ZHmLskVDQ9E1VtrwE6fJrDWJJPqMU4HNro1doNtUCuHc5nbNnwswexYchmBUmqn86fA"
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
