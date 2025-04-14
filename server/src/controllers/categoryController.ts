import { Request, Response } from 'express';
import db from '../config/prismaClient.ts';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const category = await db.category.create({
      data: {
        name,
      },
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar categoria' });
  }
};

export const listCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await db.category.findMany();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar categorias' });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;
    const category = await db.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao editar categoria' });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const category = await db.category.delete({
      where: {
        id,
      },
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar categoria' });
  }
};
