import Router from 'koa-router'

import document from '../controller/document'
const router = new Router()
router.prefix('/api');
router.get('/document/list',document.getList);

export default router