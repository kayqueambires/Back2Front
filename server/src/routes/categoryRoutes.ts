import express from 'express';
import {
  createCategory,
  listCategories,
  deleteCategory,
  updateCategory,
} from '../controllers/categoryController.ts';

const router = express.Router();

router.post('/', createCategory);
router.get('/', listCategories);
router.put('/', updateCategory);
router.delete('/', deleteCategory);

export default router;
