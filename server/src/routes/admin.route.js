import express from 'express'
import { getAdminID } from '../controllers/admin.controller.js'

const router = express.Router();


router.get('/admin', getAdminID )

export default router