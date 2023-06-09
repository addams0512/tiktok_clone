import { client } from "./../../../utils/client"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const user = req.body
		client
			.createIfNotExists(user)
			.then(() => res.status(200).json("login success"))
	}
}

export default handler
