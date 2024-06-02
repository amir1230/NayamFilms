export const HOME_QUERY = `
query {
 homeCollection{
  items{
    hero{
      url
      fileName
    }
    postersCollection{
      items{
        url
      }
    }
  }
}
}
`;
export const CAROUSEL_QUERY = `
query {
  carouselCollection{
    items{
      rating
      date
      rating
      poster{
        url
      }
      name
      duration
    }
  }

}
`;
