import Koa from "koa";
import dotenv from "dotenv";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import "reflect-metadata";

import { handleError } from "./resources/error/middleware";
import { AppDataSource } from "./data-source";

import router from "./routes";
import { verifyJWT } from "./resources/auth/auth.middleware";
dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    const app: Koa = new Koa();
    const PORT: number = parseInt(process.env.PORT as string) || 4000;

    app.use(logger());
    app.use(verifyJWT);
    // app.use(async (ctx, next) => handleError(ctx, next));
    app.use(bodyParser());
    app.use(router);

    app.listen(PORT, () => {
      console.log("Listening on port: ", PORT);
    });
  })
  .catch((error) => console.log(error));
