import { Context, Next } from "koa";
import { verifyToken } from "../../utils/token";
import { HttpError } from "../error";

const unauthorizedMessage = "Unauthorized";

export async function verifyJWT(ctx: Context, next: Next) {
  const { authorization } = ctx.request.header || {};
  const token = authorization?.split("Bearer ")[1] || "";
  if (ctx.request.path === "/auth" || ctx.request.path === "/user") {
    return next();
  } else {
    if (!token) {
      throw new HttpError(401, unauthorizedMessage);
    }
    const isValidToken = verifyToken(token);
    if (isValidToken) {
      return next();
    } else {
      throw new HttpError(401, unauthorizedMessage);
    }
  }
}
