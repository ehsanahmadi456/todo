import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { isValidEmail, isValidFirstName, isValidPassword } from "@/utils/validation";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    session: { strategy: 'jwt' },
    providers: [
        CredentialsProvider({
            async authorize(credentials: any, req) {
                const { email, password } = req.body;

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

                return { email };
            }
        })
    ]
});