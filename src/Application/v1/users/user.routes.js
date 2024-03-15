
import express from 'express';

import { selectUser } from './user.controller.js';
const router = express.Router();

router.get('/', selectUser);


export default router;
