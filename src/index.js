import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import 'antd/dist/antd.css'
import App from './components/App'
import { logRequest } from './afterwares/logRequest'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj64vfbv3xxp80153vja60n7y',
}).useAfter([ logRequest ])

const client = new ApolloClient({
  networkInterface: networkInterface,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
, document.getElementById('root'))
