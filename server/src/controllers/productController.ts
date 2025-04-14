import { Request, Response } from 'express';
import db from '../config/prismaClient.ts';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, categoryId } = req.body;
    const product = await db.product.create({
      data: {
        name,
        description,
        price,
        categoryId,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

export const listProducts = async (_req: Request, res: Response) => {
  try {
    const products = await db.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar produtos' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id, name, description, price, categoryId } = req.body;
    const product = db.product.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        price,
        categoryId,
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao editar produto' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const product = db.product.delete({
      where: id,
    });
    res.status(200).json(product);
  } catch (errror) {
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
};
