import gql from "graphql-tag";

export const REMOVE_FAVORITE = gql`
  mutation REMOVE_FAVORITE($uniq: String!) {
    removeFavoriteImage(uniq: $uniq) {
      file
      url
      date
      uniq
    }
  }
`;


export const GET_FAVORITE = gql`
  {
    favoriteImages {
      file
      url
      date
      uniq
    }
  }
`;