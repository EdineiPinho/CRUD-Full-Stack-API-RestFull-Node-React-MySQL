import express from "express";
import { getUsers } from '../constrollers/urser'

const router = express.Router()
const users = getUsers()
router.get('/', users)

export default router