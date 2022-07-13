/* eslint-disable consistent-return */
import { Place } from '../../models';

export default class PlaceController {
  static async apiGetAllPlaces(req, res, next) {
    try {
      const places = await Place.find({});

      return res.status(200).send({
        status: 'success',
        data: places,
      });
    } catch (error) {
      next(error);
    }
  }

  static async apiPostPlaces(req, res, next) {
    const { places } = req.body;

    try {
      Place.bulkWrite(places.map((place) => ({
        insertOne: {
          document: place,
        },
      })));

      return res.status(201).send({
        status: 'success',
      });
    } catch (error) {
      next(error);
    }
  }
}
