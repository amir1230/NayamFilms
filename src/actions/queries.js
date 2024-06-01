import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "../helpers/get-home-data";

export function useHomeData() {
  return useQuery({
    queryKey: ["home-data"],
    queryFn: async () => {
      try {
        const data = await getHomeData();
        return data;
      } catch (e) {
        console.log(e);
        throw new Error("Invalid Error found");
      }
    },
  });
}
