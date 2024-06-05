import callContentful from "../service/client";
import {
  HOME_QUERY,
  CAROUSEL_QUERY,
  NEWS_QUERY,
} from "../gqloperations/home-query";
export const getHomeData = async () => {
  try {
    const data = await callContentful({ query: HOME_QUERY });
    console.log(data,"data")
    if (data.data.homeCollection.items?.length > 0) {
      const temp = data.data.homeCollection.items.sort((a, b) => b.id - a.id);
      return temp;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};
export const getCarouselData = async () => {
  try {
    const data = await callContentful({ query: CAROUSEL_QUERY });

    if (data.data.carouselCollection.items?.length > 0) {
      const temp = data.data.carouselCollection.items.sort(
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
export const getNewsData = async () => {
  try {
    const data = await callContentful({ query: NEWS_QUERY });
    console.log("This is news data back ", data);
    if (
      data?.data?.newsCollection?.items[0]?.newsCollection?.items?.length > 0
    ) {
      return data?.data?.newsCollection?.items[0]?.newsCollection?.items || [];
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};
