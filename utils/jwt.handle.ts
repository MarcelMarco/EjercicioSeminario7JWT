import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

const generateToken2 = (email: string, role: string) => {
  const jwt = sign({email,role}, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

export { generateToken, verifyToken, generateToken2 };