import express from 'express';
import {
  createSale,
  deleteSale,
  listSales,
} from '../controllers/saleController.ts';

const router = express.Router();

router.post('/', createSale);
router.get('/', listSales);
router.delete('/', deleteSale);

export default router;
