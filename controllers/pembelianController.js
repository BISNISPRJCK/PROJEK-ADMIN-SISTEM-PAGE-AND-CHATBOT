import Pembelian from "../models/PembelianModels.js";
import Produk from "../models/ProdukModels.js";
import StockProduk from "../models/StockModels.js";

export const createPembelian = async(req, res)=>{
  console.log("Request body:", req.body)

  try {
    const {produk_id, jumlah} = req.body;
    const produk = await Produk.findByPk(produk_id);

    if(!produk) return res.status(404).json({message: 'Produk tidak ditemukan'});
    const total_harga = produk.harga * jumlah;

    const pembelian = await Pembelian.create({
      produk_id,
      jumlah,
      total: total_harga,
    });

    //update stok
    const stock = await StockProduk.findOne({where: {produk_id}});
    if(stock){
      stock.jumlah += parseInt(jumlah);
      await stock.save();
    }else{
      await StockProduk.create({produk_id, jumlah});
    }

    req.flash('success', `Berhasil Membeli ${jumlah} X ${produk.nama_produk}`)
    res.redirect('/produk');
    
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const cancelPembelian = async (req, res) => {
  try {
    const { id } = req.params;

    const pembelian = await Pembelian.findByPk(id);
    if (!pembelian) {
      return res.status(404).json({ message: "Pembelian tidak ditemukan" });
    }

    if (pembelian.status === 'batal') {
      return res.status(400).json({ message: "Pembelian sudah dibatalkan" });
    }

    // Kembalikan stok terlebih dahulu
    const stock = await StockProduk.findOne({ where: { produk_id: pembelian.produk_id } });
    if (stock) {
      stock.jumlah += pembelian.jumlah;
      await stock.save();
    }

    // Lalu hapus data pembelian
    await pembelian.destroy();

    // Flash message dan redirect
    req.flash("success", "Pembelian dibatalkan dan data dihapus");
    res.redirect("/pembelian");

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
