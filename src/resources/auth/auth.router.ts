import { Context } from "koa";
import Router from "koa-router";
import { AuthService } from "./auth.service";

const router = new Router({ prefix: "/auth" });
const authService = new AuthService();

router.post("/", async (ctx: Context) => {
  const { body } = ctx.request;
  const { email, password } = body;
  ctx.body = await authService.authenticateUser(email, password);
});

export default router.routes();
