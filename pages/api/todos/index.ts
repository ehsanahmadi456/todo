import User from "@/models/User";
import handleConnectDB from "@/utils/handleConnectDB";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

const handler: NextApiHandler = async (req, res) => {
    await handleConnectDB(res);

    const session: any = await getSession({ req });
    if (!session) {
        return res.status(401).json({ status: 'failed', message: 'You are not logged in!' })
    };

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
        return res.status(404).json({ status: 'failed', message: "User doesn't exist!" })
    };

    if (req.method === "POST") {
        const { title, detail, status } = req.body;

        if (!title || !detail || !status) {
            return res.status(422).json({ status: 'failed', message: 'Invalid data!' });
        };


        user.todos.push({ title, detail, status });
        user.save();

        res.status(201).json({ status: 'success', message: { title, detail, status } })
    } else if (req.method === "GET") {
        res.status(200).json({ status: 'success', data: { todos: user.todos } })
    }
}

export default handler;