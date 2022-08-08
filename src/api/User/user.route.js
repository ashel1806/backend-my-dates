import { Router } from 'express';
import UserCtrl from './user.controller';

const router = new Router();

router.route('/').post(UserCtrl.apiPostUser);
router.route('/:userId').put(UserCtrl.apiUpdateUser);

export default router;
