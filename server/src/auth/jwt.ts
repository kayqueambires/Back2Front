import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'fallback_secret';

export function generateToken(userId: string, role: string) {
  return jwt.sign({ id: userId, role }, SECRET_KEY, { expiresIn: '1d' });
}
