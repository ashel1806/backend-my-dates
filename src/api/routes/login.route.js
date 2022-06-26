import { Router } from 'express';
import { LoginCtrl } from '../controllers';

const router = new Router();

router.route('/').post(LoginCtrl.apiLoginUser);
// router.route('/google').post(LoginCtrl.apiGoogleLogin);

export default router;
