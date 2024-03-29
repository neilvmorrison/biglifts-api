import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { HttpError } from "../resources/error";

config();

// These Tokens will have to be more robust and include
// issuer information etc. This is PoC.

export function generateAccessToken(user_id: string): string {
  return jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: "10000" });
}

export function generateRefreshToken(): string {
  return jwt.sign({}, process.env.JWT_SECRET, { expiresIn: "168h" });
}

export function verifyToken(token: string): boolean {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}

export function getUserIdFromToken(token: string): string {
  const decoded = jwt.decode(token, process.env.JWT_SECRET);
  return decoded.user_id;
}
