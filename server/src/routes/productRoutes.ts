import express from 'express';
import {
  createProduct,
  deleteProduct,
  listProducts,
  updateProduct,
} from '../controllers/productController.ts';

const router = express.Router();

router.post('/', createProduct);
router.get('/', listProducts);
router.put('/', updateProduct);
router.delete('/', deleteProduct);

export default router;
