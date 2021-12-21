import { Router } from "express";
import {ItemsRouter} from './items.router.js'

const router = Router();

router.use('/items', ItemsRouter)

export default router