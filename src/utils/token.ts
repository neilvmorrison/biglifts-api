import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { HttpError } from "../resources/error";

config();

export function generateToken(user_id: string): string {
  return jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: "72h" });
}

export function verifyToken(token: string): boolean {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}

export function getUserIdFromToken(token: string): string {
  const isValid = verifyToken(token);
  if (!isValid) throw new HttpError(401, "Token is Invalid");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.user_id;
}
