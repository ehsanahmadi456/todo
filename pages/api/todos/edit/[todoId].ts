import User from "@/models/User";
import handleConnectDB from "@/utils/handleConnectDB";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

const handler: NextApiHandler = async (req, res) => {
    await handleConnectDB(res);

    const session = await getSession({ req });
    if (!session) {
        return res.status(401).json({ status: 'failed', message: 'You are not logged in!' });
    }

    const id = req.query.todoId;
    const user = await User.findOne({ _id: id })
    console.log(user);

    if (req.method === "PATCH") {
        const { title, detail, status } = req.body;

        if (!title || !detail || !status) {
            return res.status(422).json({ status: 'failed', message: 'Invalid data' });
        }

        const result = await User.updateOne(
            { "todos._id": id },
            {
                $set: {
                    "todos.$.title": title,
                    "todos.$.detail": detail,
                    "todos.$.status": status
                }
            }
        )

        res.status(200).json({ status: 'success', message: 'Data edited successfully', data: result })

    }
}

export default handler;