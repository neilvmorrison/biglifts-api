import { Context } from "koa";
import Router from "koa-router";
import setService from "./set.service";

const router = new Router({ prefix: "/sets" });

router.post("/", async (ctx: Context) => {
  const { body } = ctx.request;
  if (body instanceof Array) {
    return (ctx.body = await setService.createManySets(body));
  }
  return (ctx.body = await setService.createSet(body));
});

export default router.routes();
