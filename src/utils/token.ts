import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

export function generateToken(user_id: string): string {
  return jwt.sign({ user_id }, process.env.JWT_SECRET, { expiresIn: "72h" });
}

export function verifyToken(token: string): boolean {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}
