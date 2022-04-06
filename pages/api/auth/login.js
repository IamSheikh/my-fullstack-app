import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method !== 'POST')
    return res
      .status(405)
      .json({ status: 'method_not_allowed', error: 'Method Not Allowed' });

  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user)
    return res.status(404).json({ status: 'error', error: 'User not founded' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ status: 'error', error: 'Wrong Password' });

  const token = jwt.sign(
    {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
    },
    process.env.JWT_SECRET
  );

  res.status(200).json({ status: 'ok', data: { token } });
};

export default handler;
