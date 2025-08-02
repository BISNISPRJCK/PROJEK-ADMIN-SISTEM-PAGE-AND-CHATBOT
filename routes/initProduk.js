import express from 'express';
import Produk from '../models/ProdukModels.js';
const router = express.Router();

router.post('/init-produk', async(req, res)=>{
  try {
    await Produk.bulkCreate([
      {nama_produk: 'Sabun Mandi', harga: 5000, foto_produk: 'sabun.jpg'},
      {nama_produk: 'Shampho Botol', harga: 12000, foto_produk: 'shampo.jpg'},
      {nama_produk: 'Pasta Gigi', harga: 7000, foto_produk: 'pasta.jpg'},
      {nama_produk: 'Minyak Goreng 1 L', harga: 14000, foto_produk: 'minyak.jpg'},
      {nama_produk: 'Gula Pasir 1kg', harga: 13000, foto_produk: 'gula.jpg'},
      {nama_produk: 'Beras 5Kg', harga: 60000, foto_produk: 'beras.jpg'},
      {nama_produk: 'Teh Celup', harga: 9000, foto_produk: 'teh.jpg'},
      {nama_produk: 'Kopi Bubuk', harga: 11000, foto_produk: 'kopi.jpg'},
      {nama_produk: 'Mie Instan', harga: 3000, foto_produk: 'mie.jpg'},
      {nama_produk: 'Susu Kental', harga: 10000, foto_produk: 'susu.jpg'},
     
    ]);

    res.json({message: '10 Produk berhasil ditambah'})
  } catch (error) {
    res.status(500).json({massage: 'Gagal Menambah Produk', error})
  }
});

export default router;
