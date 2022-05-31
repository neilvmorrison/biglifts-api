import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export function generateToken(): string {
  return "thisismytoken";
}

export function verifyToken(token: string): boolean {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}
