import { sanityClient } from "@/sanity";
import { PageInfo } from "@/typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq` *[_type == "pageInfo"][0] `;

type Data = { pageInfo?: PageInfo; message?: string; };

export default async function handler(
  _req: NextApiRequest,   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  res: NextApiResponse<Data>
) {
  try {
    const pageInfo: PageInfo = await sanityClient.fetch(query);
    res.status(200).json({ pageInfo });
  } catch (error) {
    console.error("Error fetching page info:", error); // eslint-disable-next-line @typescript-eslint/no-unused-vars
    res.status(500).json({ message: "An error occurred while fetching page info" });
  }
}