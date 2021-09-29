require("dotenv").config();
const colors = require("colors");
// Подключаем бэкенд на Express.
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const mediaRouter = require("./routes/media.router");

const app = express();
const { loadNuxt, build } = require("nuxt");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1/media", mediaRouter);

mongoose.Schema.Types.Boolean.convertToFalse.add("");
mongoose
  .connect(`mongodb://localhost/${process.env.DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Db connect successfully".underline.bgYellow.black);
  })
  .catch(error =>
    console.log(`Db connection error ${error.message}`.bgRed.yellow)
  );

const isDev = process.env.NODE_ENV !== "production";

async function start() {
  const nuxt = await loadNuxt(isDev ? "dev" : "start");
  app.use(nuxt.render);
  if (isDev) {
    build(nuxt);
  }
  app.listen(PORT);
}

// Запуск приложения.
start();
