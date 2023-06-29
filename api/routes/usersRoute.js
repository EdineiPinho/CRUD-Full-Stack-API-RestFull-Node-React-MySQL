import express from 'express'
import { getUsers } from '../constrollers/userConstroller'

const router = express.Router()

router.get('/', getUsers)

export default router