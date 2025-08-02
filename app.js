import express from "express"
import fileUpload from "express-fileupload"
import dotenv from "dotenv"
import session from "express-session"

import flash from 'connect-flash';

import path from "path"
import { fileURLToPath } from "url"

import db from "./config/database.js"
import Pembelian from "./models/PembelianModels.js"
import StockProduk from "./models/StockModels.js"
import Produk from "./models/ProdukModels.js"
import initProduk from "./routes/initProduk.js"
import produkRoute from "./routes/ProdukRoutes.js"
import PembelianRoute from "./routes/pembelianRoutes.js"
import chatbotRoute from "./routes/chatbotRoutes.js";

dotenv.config();

const app = express();
app.use(session({
  secret: 'rahasia',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(express.urlencoded({ extended: true })); // untuk form HTML



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"))

// async function initializeDatabase(){
//   try {
//     await db.authenticate();
//     console.log("Database conntected...");
//     await db.sync({alter: true});
//     console.log("Data dimodel telah dibuat....");
//   } catch (error) {
//     console.log("Database tidak terhubung");
//     console.log(error);
//   }
// }

// initializeDatabase();

app.use(express.json());
app.use(fileUpload());

app.use(express.static("public"));
app.use(initProduk);

// view

app.get("/", (req, res) => {
  res.render( "index");
});




// backend route
app.use(produkRoute);
app.use(PembelianRoute);
app.use(chatbotRoute);


app.listen(process.env.APP_KEY, ()=>{
  console.log(`server Running on http://localhost:${process.env.APP_KEY}`);
});