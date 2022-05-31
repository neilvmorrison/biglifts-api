import { Context } from "koa";
import Router from "koa-router";
import programService from "../services/program.service";

const router = new Router({ prefix: "/program" });

router.post("/", async (ctx: Context) => {
  const { body } = ctx.request;
  ctx.body = await programService.createProgram(body);
});

router.get("/", async (ctx: Context) => {
  ctx.body = await programService.getAllPrograms();
});

router.get("/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = await programService.getProgramById(id);
});

export default router.routes();
