import { Context } from "koa";
import Router from "koa-router";
import profileService from "./profile.service";

const router = new Router({ prefix: "/profile" });

router.get("/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = await profileService.getProfile(id);
});

router.post("/", async (ctx: Context) => {
  const { user_id } = ctx.query;
  const { body } = ctx.request;
  ctx.body = await profileService.createProfile(user_id as string, body);
});

export default router.routes();
