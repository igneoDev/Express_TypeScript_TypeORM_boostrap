import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../database/models/User'

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body

    const userRepository = getRepository(User)

    const userAlreadyExists = await userRepository.findOne({ email })

    if (userAlreadyExists) {
      return res.json({ error: 'User already exists' })
    }

    const user = userRepository.create({
      name, email,
    })

    await userRepository.save(user)

    return res.json(user)
  }
}

export { UserController }
