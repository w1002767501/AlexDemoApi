import Router from 'koa-router'
import PublicController from '../api/PublicController'

const router = new Router()

router.get('/getCaptcha', PublicController.demo)

export default router
