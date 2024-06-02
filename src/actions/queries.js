import { useQuery } from "@tanstack/react-query";
import { getCarouselData, getHomeData } from "../helpers/get-home-data";

export function useHomeData() {
  return useQuery({
    queryKey: ["home-data"],
    queryFn: async () => {
      try {
        const data = await getHomeData();
        console.log("This is data ", data);
        return data;
      } catch (e) {
        console.log(e);
        throw new Error("Invalid Error found");
      }
    },
  });
}
export function useCarouselData() {
  return useQuery({
    queryKey: ["carousel-data"],
    queryFn: async () => {
      try {
        const data = await getCarouselData();
        console.log("This is data ", data);
        return data;
      } catch (e) {
        console.log(e);
        throw new Error("Invalid Error found");
      }
    },
  });
}
