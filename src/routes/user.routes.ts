import { Context } from "koa";
import Router from "koa-router";
import userService from "../services/user.service";

const router = new Router({ prefix: "/user" });

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

router.post("/authenticate", async (ctx: Context) => {
  const { email, password } = ctx.request.body;
  console.log(email, password);
  ctx.body = await userService.authenticateUser(email, password);
});

router.patch("/:id", async (ctx: Context) => {
  const { id } = ctx.params;
  const { body } = ctx.request;
  ctx.body = await userService.updateUser(id, body);
});

router.patch("/:id/follow", async (ctx: Context) => {
  const { id } = ctx.params;
  const { following } = ctx.query;
  ctx.body = await userService.followUser(id, following as string);
});

export default router.routes();
