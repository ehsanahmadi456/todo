import User from "@/models/User";
import handleConnectDB from "@/utils/handleConnectDB";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

const handler: NextApiHandler = async (req, res) => {
    await handleConnectDB(res);

    const session = await getSession({ req });
    if (!session) {
        res.status(401).json({ status: 'failed', message: 'You are not logged in!' })
    }

    const user = await User.findOne({ email: session.user.email })
    if (!user) {
        res.status(404).json({ status: 'failed', message: "User doesn't exist!" });
    }

    const { firstName, lastName, phone, address, country, city } = req.body;
    if (req.method === 'POST') {

        user.firstName = firstName
        user.lastName = lastName
        user.phone = phone
        user.address = address
        user.country = country
        user.city = city

        if (!firstName) {
            res.status(422).json({ status: 'failed', message: 'Invalid data' });
        }

        user.save()
        res.status(200).json({
            status: 'success',
            message: 'Your profile successfully updated!',
            data: {
                firstName, lastName, phone, address, country, city
            }
        })
    } else if (req.method === 'GET') {
        res.status(200).json({
            status: 'success',
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                address: user.address,
                country: user.country,
                city: user.city
            }
        })
    }
}

export default handler;