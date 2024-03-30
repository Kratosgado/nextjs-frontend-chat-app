import { SignUpInput } from "./types";


// function to make a sign up request to rest api
export const signUp = async ({email, name, password}: SignUpInput) => {
  const response = await fetch(process.env.chatBackendUrl!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      name,
      password
    })
  });
  return response.json();
}

// function to make a login request to rest api returns token
export const login = async ({email, password}: {email: string, password: string}) => {
  const response = await fetch(process.env.chatBackendUrl!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  return response.json();
}