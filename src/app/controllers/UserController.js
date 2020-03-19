import User from '../models/User';

class UserController {
  async store(req, res) {
    const isExists = await User.findOne({
      where: { username: req.body.username },
    });

    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Senhas não correspondem...' });
    }

    if (isExists)
      return res.status(400).json({ error: 'Esse usuário já existe...' });

    const { id, username } = await User.create(req.body);

    return res.json({ id, username });
  }
}

export default new UserController();
