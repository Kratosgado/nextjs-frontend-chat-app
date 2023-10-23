/* eslint-disable react-hooks/rules-of-hooks */
import { gql, useApolloClient, useMutation } from '@apollo/client';
import { SignUpUserInput } from './types';

const SIGN_UP = gql`
  mutation SignUp($email: String!, $name: String!, $password: String!) {
    signUp(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

const queryClient = useApolloClient();

// Create a function to sign up a user
function signUpUser(signUpUserInput: SignUpUserInput) {
   
  const [signUp, { data, error }] = useMutation(SIGN_UP);

  // Call the signUp mutation
  signUp({ variables: { ...signUpUserInput } })
    .then((response) => {
      // Handle a successful sign-up, you can access the data in response.data
      console.log('User signed up successfully', response.data);
    })
    .catch((err) => {
      // Handle sign-up errors, you can access the error message in err.message
      console.error('Error signing up:', err.message);
    });
}