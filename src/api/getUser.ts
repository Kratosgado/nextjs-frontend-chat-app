

// export async function getCurrentUser(){
//   response: Response = await fetch(process.env.chatBackendUrl!, )
// }
export const getCurrentUser = async (token: string) => {
  let response = await fetch(`${process.env.chatBackendUrl!}/auth/getCurrentUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  });
  return response.json();
}