import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import handleConnectDB from "@/utils/handleConnectDB";
import { isValidEmail, isValidFirstName, isValidPassword } from "@/utils/validation";

async function handler(req, res) {
    if (req.method !== 'POST') return;

    await handleConnectDB(res);

    const { firstName, email, password } = req.body;

    if (!isValidFirstName(firstName) || !isValidEmail(email) || !isValidPassword(password)) {
        return res.status(422).json({ status: "failed", message: "Invalid data", });
    };

    const existingUser = await User.findOne({ email: email })

    if (existingUser) {
        return res.status(422).json({ status: 'failed', message: 'User exists already!' })
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
        firstName: firstName,
        email,
        password: hashedPassword
    });

    res.status(201).json({ status: 'success', message: 'Created user!' })
}

export default handler;