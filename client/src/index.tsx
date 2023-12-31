import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import queryClient from "./services/queryClient";
import {QueryClientProvider} from "react-query";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>
);

