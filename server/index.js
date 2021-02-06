const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const { clientOrigins, serverPort } = require("./config");
const { messagesRouter } = require("./messages/messages.router");
const { productsRouter } = require("./routes/product.router");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const mongoose = require("mongoose");

//App Variables
const app = express();
const apiRouter = express.Router();
const productRouter = express.Router();
const path = require("path");

//App Configuration
app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}
app.use("/api", apiRouter);
app.use("/api", productRouter);
apiRouter.use("/messages", messagesRouter);
productRouter.use("/product", productsRouter);

const connect = mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

//Server Activation
const port = serverPort || 5000;
app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
