import {Sequelize} from 'sequelize';
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Produk = db.define(
  "table_produk",{
    nama_produk :{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        len : [3, 400],
      },
    },

    harga: {
     type: DataTypes.FLOAT,
     allowNull: false,
     validate: {
      notEmpty: true,
      isFloat: true,
      min: 0,
     } 
    },

    foto_produk: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
        len :[3, 255]
      }
    },
  },
{
  freezeTableName: true
}
);

export default Produk;