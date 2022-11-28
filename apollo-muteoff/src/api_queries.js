import { gql } from '@apollo/client';

const getMyProfile = gql`
  query me {
    me {
      id
      name
      userID
    }
  }
`;

export { getMyProfile };