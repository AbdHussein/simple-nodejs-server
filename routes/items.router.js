import { Router } from "express";
import {Items} from '../controllers/index.js';

export const ItemsRouter = Router();

ItemsRouter
.get('/', Items.getItems)
.get('/:id', Items.getItemByID);
