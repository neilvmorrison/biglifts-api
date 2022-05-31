import Router from "koa-router";
import exerciseRouter from "./exercise.router";
import programRouter from "./program.router";
import testRoutes from "./test.router";
import userRoutes from "./user.routes";

const router = new Router();

router.use(testRoutes, userRoutes, exerciseRouter, programRouter);

export default router.routes();
