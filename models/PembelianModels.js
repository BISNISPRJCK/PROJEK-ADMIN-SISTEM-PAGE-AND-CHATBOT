import {DataTypes} from "sequelize"
import db from "../config/database.js"
import Produk from "./ProdukModels.js"

const Pembelian = db.define('table_pembelian', {
  produk_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Produk,
      key: 'id',
    }
  },

  jumlah:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  total:{
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },

  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'selesai',
  },

  tanggal: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
},

{
  freezeTableName: true,
  timestamps: false
}
);

export default Pembelian;