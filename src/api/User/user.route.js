import { Router } from 'express';
import UserCtrl from './user.controller';

const router = new Router();

router.route('/').post(UserCtrl.apiPostUser);

export default router;
