import { Router } from 'express';
import { UserCtrl } from '../controllers';

const router = new Router();

router.route('/').post(UserCtrl.apiPostUser);

export default router;
