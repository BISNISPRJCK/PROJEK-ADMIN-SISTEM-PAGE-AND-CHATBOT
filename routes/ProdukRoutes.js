import express from "express";
import { getPembelian, getProduk } from "../controllers/produkController.js";

const router = express.Router();

router.get('/produk', getProduk);
router.get('/pembelian', getPembelian);

export default router;