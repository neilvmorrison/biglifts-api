import { Context, Next } from "koa";
import { verifyToken } from "../../utils/token";
import { HttpError } from "../error";

const unauthorizedMessage = "Unauthorized";

export async function verifyJWT(ctx: Context, next: Next) {
  const { authorization } = ctx.request.header || {};
  const token = authorization?.split("Bearer ")[1] || "";
  if (ctx.request.path === "/auth") {
    return next();
  } else {
    if (!token) {
      throw new HttpError(401, unauthorizedMessage);
    }
    try {
      verifyToken(token);
      return next();
    } catch (err) {
      throw new HttpError(401, unauthorizedMessage);
    }
  }
}

export async function refreshUser(refreshToken: string): Promise<void> {}
