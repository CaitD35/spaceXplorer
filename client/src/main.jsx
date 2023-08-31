import React from 'react';
import { ReactDom } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'; 
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
