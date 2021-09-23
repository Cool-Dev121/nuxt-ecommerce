require("dotenv").config();
// Подключаем бэкенд на Express.
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
