import { Router } from 'express';
import { LoginCtrl } from '../controllers';

const router = new Router();

router.route('/').post(LoginCtrl.apiLoginUser);

export default router;
