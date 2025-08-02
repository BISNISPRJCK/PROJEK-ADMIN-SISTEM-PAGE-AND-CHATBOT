import Produk from "../models/ProdukModels.js";
import Pembelian from "../models/PembelianModels.js";
import StockProduk from "../models/StockModels.js";

export const getProduk = async (req, res)=>{

  try {
    const produk = await Produk.findAll();
    const success = req.session.success;
    res.render("produk", {produk, 
      produk,
      messages: {
        success: req.flash('success')
      }
    });
  } catch (error) {
    res.status(500).send("Gagal Mengambil data Produk:"+ error.message);
    
  }
}

export const getPembelian = async (req, res)=>{
  try {
    const pembelians = await Pembelian.findAll();

    const dataPembelian = await Promise.all(
      pembelians.map(async(pembelian)=>{
        const produk = await Produk.findByPk(pembelian.produk_id);
        const stok = await StockProduk.findOne({where: {produk_id: pembelian.id}});

        return{
          nama_produk : produk?.nama_produk || "Produk tidak ditemukan",
          jumlah_dibeli: pembelian.jumlah,
          id_pembelian: pembelian.id,
          total: pembelian.total,
          stok_tersedia: stok?.jumlah || 0,
        };
      })
    );

    res.render("pembelian", {
      pembelians: dataPembelian,
      messages: {
        success: req.flash("success")
      }
    })
  } catch (error) {
    res.status(500).send("Gagal Mengambil data pembelian:" + error.message)
  }
}