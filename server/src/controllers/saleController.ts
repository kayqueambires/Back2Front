import { Request, Response } from 'express';
import db from '../config/prismaClient.ts';

export const createSale = async (req: Request, res: Response) => {
  try {
    const { productId, userId, quantity, price } = req.body;
    const sale = await db.sale.create({
      data: {
        productId,
        userId,
        quantity,
        price,
      },
    });
    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar venda' });
  }
};

export const listSales = async (_req: Request, res: Response) => {
  try {
    const sales = await db.sale.findMany();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar vendas' });
  }
};

export const deleteSale = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const sale = await db.sale.delete({
      where: id,
    });
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar venda' });
  }
};
