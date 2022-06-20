import bcrypt from 'bcrypt';
import { OAuth2Client } from 'google-auth-library';

import User from '../../models/User';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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
        throw new Error('invalidUser');
      }

      if (!passwordCorrect) {
        throw new Error('invalidPassword');
      }

      res.status(200).send({
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async apiGoogleLogin(req, res, next) {
    try {
      const { token } = req.body;

      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const { email } = ticket.getPayload();

      const user = User.findOne({ email });

      if (!user) throw new Error('invalidUser');

      res.status(200).send({
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
}
