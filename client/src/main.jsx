import React from 'react';
import { createRoot } from 'react-dom/client'; // Note the new import
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
