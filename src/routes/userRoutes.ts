import { Router } from 'express'
import { UserController } from '../controllers/userController'

const userRoutes = Router()

const userController = new UserController()

userRoutes.post('/', userController.create)
userRoutes.get('/', (req, res) => res.send('Hello World'))

export { userRoutes }
