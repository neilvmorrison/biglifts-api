import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function generateHash(password_string: string): Promise<string> {
  try {
    const hash = await bcrypt.hash(password_string, SALT_ROUNDS);
    return hash;
  } catch (err) {
    throw new Error("Error generating hash");
  }
}

export async function compareHash(
  plain_text: string,
  hash: string
): Promise<boolean> {
  try {
    return bcrypt.compare(plain_text, hash);
  } catch (err) {
    throw new Error("Password does not match");
  }
}
