import { gql, useApolloClient, useMutation } from '@apollo/client';

export const GET_USER = gql`
  query ($id: ID!){
  user(id: $id){
    id
    name
    email
    updatedAt
    createdAt
    conversations
  }
}
`;
