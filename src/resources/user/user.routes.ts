import { Context } from "koa";
import Router from "koa-router";
import userService from "./user.service";

const router = new Router({ prefix: "/user" });

// TODO: gotta figure out a decorator to get userId from token. Doing it
// manually feels laborious

router.get("/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = await userService.getUserById(id);
});

router.get("/", async (ctx: Context) => {
  const { email } = ctx.query;
  ctx.body = await userService.getUserByEmail(email as string);
});

router.post("/", async (ctx: Context) => {
  const { body } = ctx.request;
  ctx.body = await userService.createUser(body);
});

router.patch("/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  const { body } = ctx.request;
  ctx.body = await userService.updateUser(id, body);
});

// router.patch("/:id/follow", async (ctx: Context) => {
//   const { id } = ctx.params;
//   const { following } = ctx.query;
//   ctx.body = await userService.followUser(id, following as string);
// });

export default router.routes();
