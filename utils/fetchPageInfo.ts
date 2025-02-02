import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
  
    if (!res.ok) {
      throw new Error("Failed to fetch page info");
    }
  
    const data = await res.json();
    console.log("Fetched PageInfo:", data.pageInfo);
    
    return data.pageInfo;
  };
  
