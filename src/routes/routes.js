import combineRoutes from 'koa-combine-routers'

import publicRouter from './publicRouter'
import loginController from './loginController'

export default combineRoutes(publicRouter, loginController)
