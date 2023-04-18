// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { allPostsQuery } from "../../../../utils/queries"
import { client } from "../../../../utils/client"
import { Deferred } from "next/dist/server/image-optimizer"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "GET") {
		const query = allPostsQuery()
		const data = await client.fetch(query)
		res.status(200).json(data)
	}
}

export default handler
