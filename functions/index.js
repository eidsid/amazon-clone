const express = require("express");
const cors = require("cors");
const stripe = require("strip-js")(
  "sk_test_51JwvitJSSyNgmcbH3IzDtzpeHeiYCQki89HL3JSC6gwBIN6Edwxd2l11pQhG6TFRUY21FMSKorymjUjgJcDWKHmb004v8Zxbqq"
);
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  console.log("welcome");

  res.status(200).send("welcome backend");
});
app.post("/payments/create", async (req, res) => {
  console.log("working");
  const total = req.body.total;

  console.log("payment request resive Bom!!! for this amount>>>>", total);
  const paymentIntet = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  console.log(paymentIntet.client_secret);
  res.status(201).send({
    clientSecret: paymentIntet.client_secret,
  });
});
// exports.api = functions.https.onRequest(app);
module.exports = { app };
