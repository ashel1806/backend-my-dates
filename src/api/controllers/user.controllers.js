import User from '../../models/User';

export default class UserController {
  static async apiPostUser(req, res) {
    const {
      name, lastName, email, country,
    } = req.body;

    try {
      const user = new User({
        name,
        lastName,
        email,
        country,
      });

      const savedUser = await user.save();

      res.status(201).json({ status: 'success', user: savedUser });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
