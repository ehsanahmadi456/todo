import { compare, hash } from "bcryptjs";

async function hashPassword(password: string) {
    const hashedPassword = await hash(password, 12)
    return hashedPassword;
}

async function verifyPassword(password: string, hashedPassword: string) {
    const isValid = await compare(password, hashedPassword)
    return isValid;
}

export { hashPassword, verifyPassword };