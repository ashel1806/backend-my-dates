import { User } from '../../models';

export default class UserController {
  static async apiPostUser(req, res, next) {
    const { body } = req;

    try {
      const user = new User({
        name: body.name,
        lastName: body.lastName,
        email: body.email,
        country: body.country,
        password: body.password,
        passwordConfirm: body.passwordConfirm,
        avatar: body.avatar,
      });

      const savedUser = await user.save();

      res.status(201).json({ status: 'success', user: savedUser });
    } catch (error) {
      next(error);
    }
  }
}
