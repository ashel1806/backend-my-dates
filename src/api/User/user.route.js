import { Router } from 'express';
import UserCtrl from './user.controller';
import upload from '../../config/multer.config';

const router = new Router();

router.route('/').post(UserCtrl.apiPostUser);

router.use(upload.single('image'));

router.route('/:userId').put(UserCtrl.apiUpdateUser);

export default router;
