import Vue from 'vue'
import VueApollo from 'vue-apollo'
import defaultOptions from './defaultOptions'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use(VueApollo)

const link = createHttpLink({
  uri: process.env.VUE_APP_GRAPHQL_HTTP
})

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({ link, cache })

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions
})

export default apolloProvider
