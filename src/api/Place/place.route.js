import { Router } from 'express';
import PlaceCtrl from './place.controller';

const router = new Router();

router.route('/').get(PlaceCtrl.apiGetAllPlaces);
router.route('/').post(PlaceCtrl.apiPostPlaces);

export default router;
