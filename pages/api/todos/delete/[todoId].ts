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

    if (req.method === 'DELETE') {
        const id = req.query.todoId

        try {
            user.todos = user.todos.filter(todo => todo.id !== id)
            user.save()
            res.status(200).json({ status: 'success', message: user })
        } catch (err) {
            console.log(err);
            return res.status(500).json({ status: 'failed', message: 'Error in deleting data from database' })

        }
    }
}

export default handler