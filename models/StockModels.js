import {Sequelize} from 'sequelize';
import db from "../config/database.js";
import Produk from './ProdukModels.js';

const {DataTypes} = Sequelize;

const StockProduk = db.define(
  "table_stockproduk",{
    produk_id :{
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: Produk,
        key : 'id',
      },
    },

    jumlah: {
     type: DataTypes.INTEGER,
     allowNull: false,
     } 
    },

{
  freezeTableName: true
}
);

export default StockProduk;