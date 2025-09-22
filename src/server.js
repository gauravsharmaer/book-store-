const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./db/dbConnect.js");

dotenv.config({
  path: "./env",
});

const app = express();

app.use(express.json());

// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     //allow frontend to include cookies in request
//     credentials: true,
//     //"OPTIONS" → super important, because it allows browsers to do CORS preflight checks.
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   })
// );
// app.use("/api/v1", router);
const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`sun rha hu ${port} pr`);
    });
  })
  .catch((err) => {
    console.error("err connecting db", err);
    process.exit(1);
  });
