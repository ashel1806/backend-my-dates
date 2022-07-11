import { Router } from 'express';
import { PlaceCtrl } from '../controllers';

const router = new Router();

router.route('/').get(PlaceCtrl.apiGetAllPlaces);
router.route('/').post(PlaceCtrl.apiPostPlaces);

export default router;
