import User from './user';

export default class UserController {
  // eslint-disable-next-line consistent-return
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

      return res.status(201).send({
        status: 'success',
        user: savedUser,
      });
    } catch (error) {
      next(error);
    }
  }
}
