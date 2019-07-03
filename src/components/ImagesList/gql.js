import gql from "graphql-tag";

export const GET_IMAGES = gql`
  {
    images {
      file
      url
      date
      uniq
    }
  }
`;

export const REMOVE_IMAGE = gql`
  mutation REMOVE_IMAGE($uniq: String!) {
    removeImage(uniq: $uniq) {
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

export const ADD_FAVORITE = gql`
  mutation ADD_FAVORITE($file: String!, $url: String!, $date: String!, $uniq: String!) {
    addFavoriteImage(imageInput: { file: $file, url: $url, date: $date, uniq: $uniq }) {
      file
      url
      date
      uniq
    }
  }
`;
