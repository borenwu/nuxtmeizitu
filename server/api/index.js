import { Router } from 'express'

import users from './users'
// import blogs from './blogs'
import posts from './posts'

const router = Router()

// Add USERS Routes
router.use(users)
// router.use(blogs)
router.use(posts)

export default router
