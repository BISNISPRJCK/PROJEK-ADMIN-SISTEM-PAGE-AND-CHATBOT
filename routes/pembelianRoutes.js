import express from 'express';
import { createPembelian, cancelPembelian } from '../controllers/pembelianController.js';

const router = express.Router();

router.post('/pembelian', createPembelian);
router.post('/pembelian/:id', cancelPembelian);

export default router;