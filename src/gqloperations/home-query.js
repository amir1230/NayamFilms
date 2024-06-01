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
  carouselCollection{
    items{
      rating
      date
      rating
      poster{
        url
      }
      name
    }
  }

}
`;
