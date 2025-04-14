import { Router } from 'express';
import salesRoutes from './saleRoutes.ts';
import categoriesRoutes from './categoryRoutes.ts';
import productsRoutes from './productRoutes.ts';
import authRoutes from './authRoutes.ts';
import userRoutes from './userRoutes.ts';

const router = Router();

router.use('/sales', salesRoutes);
router.use('/categories', categoriesRoutes);
router.use('/products', productsRoutes);
router.use('/auth', authRoutes);
router.use('/user', userRoutes);

export default router;
