import { Router } from 'express';
import UserController from '../controllers/user.controllers.js'

const router = new Router();

router.route('/').post(UserController.apiPostUser); 

export default router;