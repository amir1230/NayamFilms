import { useQuery } from "@tanstack/react-query";
import {
  getCarouselData,
  getHomeData,
  getNewsData,
} from "../helpers/get-home-data";

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
export function useCarouselData() {
  return useQuery({
    queryKey: ["carousel-data"],
    queryFn: async () => {
      try {
        const data = await getCarouselData();
        return data;
      } catch (e) {
        console.log(e);
        throw new Error("Invalid Error found");
      }
    },
  });
}
export function useNewsData() {
  return useQuery({
    queryKey: ["news-data"],
    queryFn: async () => {
      try {
        const data = await getNewsData();
        console.log("This is news data ", data);
        return data;
      } catch (e) {
        console.log(e);
        throw new Error("Invalid Error found");
      }
    },
  });
}
