// src/routes/productRoutes.ts
import { Router } from 'express';
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/product_controller';

const router = Router();

// Routes for products
router.post('/add', createProduct); // Create a new product
router.get('/fetch', getAllProducts); // Get all products
router.get('/fetch/:id', getProductById); // Get a single product by ID
router.put('/update/:id', updateProduct); // Update a product by ID
router.delete('/delete/:id', deleteProduct); // Delete a product by ID

export default router;
