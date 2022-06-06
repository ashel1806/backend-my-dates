import bcrypt from 'bcrypt';
import User from '../../models/User';

export default class LoginController {
  // eslint-disable-next-line consistent-return
  static async apiLoginUser(req, res, next) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(password, user.password);

      if (!user) {
        return res.status(401).json({
          error: 'Usuario no encontrado',
        });
      }

      if (!passwordCorrect) {
        return res.status(401).json({
          error: 'Contraseña Incorrecta',
        });
      }

      res.status(200).send({
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
}
