import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import api from "./api";
import logger from "./logger";
import { AppDataSource } from "./data-source";

dotenv.config();

const port = process.env.PORT || 8000;
// const isDev = process.env.CURRENT_ENV === 'development';
const appUrl = process.env.APP_URL || '127.0.0.1:3000';

(async () => {
  try {
    logger.info('connected to db');
    await AppDataSource.initialize();
  } catch (error) {
    logger.error(`error: ${error}`);
  }
})()

const server = express();

// 开启跨域
server.use(cors({
  origin: "*", //appUrl,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}))
server.use(helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false }));
server.use(compression());
server.use(express.json());

// /api/v1/**
api(server);

server.listen(port, () => {
  logger.info(`> Ready on ${port}, appUrl at ${appUrl}`);
});