import { SignUpInput } from "./types";


// function to make a sign up request to rest api
export const signUp = async ({ email, name, password }: SignUpInput) => {
  const response = await fetch(`${process.env.chatBackendUrl!}/auth/signup`, {
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
export const login = async ({ email, password }: { email: string, password: string }) => {
  const response = await fetch(`${process.env.chatBackendUrl!}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('token', data.token);
  }
  return response;
}

export const checkUserSession = async (): Promise<boolean> => {
  const token = localStorage.getItem('token');

  if (!token) { return false; }
  const response = await fetch(`${process.env.chatBackendUrl!}/user/me`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  return response.ok;
}