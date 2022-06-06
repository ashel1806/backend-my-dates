import User from '../../models/User';

export default class UserController {
  static async apiPostUser(req, res, next) {
    const {
      name, lastName, email, country, password, passwordConfirm,
    } = req.body;

    try {
      const user = new User({
        name,
        lastName,
        email,
        country,
        password,
        passwordConfirm,
      });

      const savedUser = await user.save();

      res.status(201).json({ status: 'success', user: savedUser });
    } catch (error) {
      next(error);
    }
  }
}
