import { Context } from "koa";
import Router from "koa-router";
import profileService from "./profile.service";

const router = new Router({ prefix: "/profile" });

router.get("/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = await profileService.getProfile(id);
});

router.post("/", async (ctx: Context) => {
  const { body } = ctx.request;
  ctx.body = await profileService.createProfile(body);
});

export default router.routes();
