import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method !== 'POST')
    return res.status(405).json({
      status: 'method_not_allowed',
      error: 'Method Not Allowed',
    });

  const { firstName, lastName, username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const userWithUsername = await prisma.user.findUnique({
    where: { username: username },
  });

  if (userWithUsername?.username === username)
    return res
      .status(400)
      .json({ status: 'error', error: 'Username already taken' });

  const newUser = await prisma.user.create({
    data: {
      firstName,
      lastName,
      username,
      password: hashedPassword,
    },
  });

  res.status(200).json({ status: 'ok', data: { user: newUser } });
};

export default handler;
