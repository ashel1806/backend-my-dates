import bcrypt from 'bcrypt';
import User from '../../models/User';

export default class UserController {
  static async apiPostUser(req, res) {
    const {
      name, lastName, email, country, password,
    } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    try {
      const user = new User({
        name,
        lastName,
        email,
        country,
        passwordHash,
      });

      const savedUser = await user.save();

      res.status(201).json({ status: 'success', user: savedUser });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
