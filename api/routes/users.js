import express from "express";
import { getUsers } from '../constrollers/urser'

const router = express.Router()

router.get('/', getUsers)

export default router