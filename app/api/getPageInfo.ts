import { sanityClient } from "@/sanity";
import { PageInfo } from "@/typings";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "pageInfo"][0]
`;

export async function GET(req: Request) {
  try {
    const pageInfo: PageInfo = await sanityClient.fetch(query);
    return new Response(JSON.stringify({ pageInfo }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch page info" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
