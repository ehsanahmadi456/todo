import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { isValidEmail, isValidPassword } from "@/utils/validation";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: { strategy: 'jwt' },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = req.body

                try {
                    await connectDB();
                } catch (err) {
                    throw new Error('Error in connecting to DB!');
                }

                if (!isValidEmail(email) || !isValidPassword(password)) {
                    throw new Error('Invalid Data!')
                }

                const user = await User.findOne({ email })

                if (!user) {
                    throw new Error("User doesn't exist!");
                }

                const isValid = verifyPassword(password, user.password)

                if (!isValid) throw new Error('Username or password is incorrect!');

                return { email: email, id: '12' };
            }
        })
    ]
}

export default NextAuth(authOptions);