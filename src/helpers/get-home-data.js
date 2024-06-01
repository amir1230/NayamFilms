import callContentful from "@/service/client";
import { GET_ALL_PROJECTS } from "@/gqloperations/quries";
export const getHomeData = async () => {
  try {
    const data = await callContentful({ query: GET_ALL_PROJECTS });
    if (data.data.projectsCollection.items?.length > 0) {
      const temp = data.data.projectsCollection.items.sort(
        (a, b) => b.id - a.id
      );
      return temp;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};
