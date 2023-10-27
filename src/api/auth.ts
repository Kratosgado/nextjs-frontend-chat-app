import { gql, useApolloClient, useMutation } from '@apollo/client';

export const SIGN_UP = gql`
  mutation ($email: String!, $name: String!, $password: String! ){
  signUp(signUpInput: {
    email: $email
		name: $name
    password: $password
  }){
    id
    name
    email
  }
}
`;

export const SIGN_IN = gql`
  mutation ($email: String!, $password: String!){
  signIn(signInInput: {
    email: $email
    password: $password
  })
}
`;