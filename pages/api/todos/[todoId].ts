import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
    try {
        await connectDB();
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ status: "failed", message: "Error in connecting to database" });
        return;
    }

    if (req.method === "GET") {
        const id = req.query.todoId;

        try {
            const todo = await User.findOne({ _id: id });

            res.status(200).json({ status: "success", data: todo });
        } catch (err) {
            res.status(500).json({
                status: "failed",
                message: "Error in retrieving data from database",
            });
        }
    }
}

export default handler;