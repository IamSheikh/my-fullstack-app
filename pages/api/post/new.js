import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const handler = (req, res) => {
  if (req.method !== 'POST')
    return res
      .status(405)
      .json({ status: 'method_not_allowed', error: 'Method Not Allowed' });
  if (!req.headers.authorization)
    return res
      .status(401)
      .json({ status: 'not_authorized', error: 'Not Authorized' });

  const userDetails = jwt.decode(req.headers.authorization);

  if (!userDetails)
    return res
      .status(400)
      .json({ status: 'invalid_token', error: 'Invalid Token' });

  res.json({
    userDetails,
  });
};

export default handler;
