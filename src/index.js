import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react"
import { App } from './App';

ReactDOM.render(
  //wrapping weather app with chakra provider which allow us to use chakra in our app
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

