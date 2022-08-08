/* eslint-disable consistent-return */
import axios from 'axios';

export default class PlaceController {
  static async apiGetPlaceInfo(req, res, next) {
    try {
      const { placeId } = req.query;
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.GOOGLE_API_KEY}`;

      const place = await axios.get(url);

      // console.log(placeData.data);

      return res.status(200).send({
        status: 'success',
        data: place.data,
      });
    } catch (error) {
      next(error);
    }
  }
}
