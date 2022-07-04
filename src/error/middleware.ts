import { Context, Next } from "koa";

export async function handleError(ctx: Context, next: Next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status;
    ctx.message = err.message;
  }
}
