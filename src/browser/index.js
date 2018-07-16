import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/App'
import Layout from '../shared/Layout'
import { BrowserRouter } from 'react-router-dom'

hydrate(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>,
  document.getElementById('app')
);