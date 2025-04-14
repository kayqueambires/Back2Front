import { Request, Response } from 'express';
import db from '../config/prismaClient.ts';
import bcrypt from 'bcryptjs';
import { generateToken } from '../auth/jwt.ts';

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await db.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ error: 'Usuário ou senha inválidos' });
      return;
    }

    const token = generateToken(user.id, user.role);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro na rota de login' });
  }
};
