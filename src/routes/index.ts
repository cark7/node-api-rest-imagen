import {Router} from 'express'
const router = Router()

import {helloWorld} from '../controllers/photo.controller'

router.route('/')
    .get(helloWorld)

export default router;