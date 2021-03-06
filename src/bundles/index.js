import { composeBundles } from 'redux-bundler'

import ipfsBundle from './ipfs'
import appIdle from './app-idle'
import peersBundle from './peers'
import routesBundle from './routes'
import redirectsBundle from './redirects'

export default composeBundles(
  appIdle({idleTimeout: 5000}),
  ipfsBundle,
  peersBundle,
  routesBundle,
  redirectsBundle
)
