require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const getVoucher = require("./routes/getVoucher");

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => res.send('Welcome to the Residao Voucher API v1.0.1'));
app.use("/api/getVoucher", getVoucher);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
