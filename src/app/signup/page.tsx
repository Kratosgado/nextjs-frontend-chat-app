import { Metadata } from "next";


// define a metadata
export const metadata: Metadata = {
  title: 'Sign Up Page',
  description: 'Sign Up page description',
  keywords: 'Sign Up page keywords',
}

export default function SignUpPage() {
   return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <div className="bg-white p-8 rounded shadow-md w-96">
         <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
         <form>
           <div className="mb-4">
             <label htmlFor="name" className="block text-sm font-medium text-gray-600">
               Name
             </label>
             <input
               type="text"
               id="name"
               name="name"
               className="mt-1 p-2 w-full border rounded focus:ring focus:ring-indigo-200"
             />
           </div>
           <div className="mb-4">
             <label htmlFor="email" className="block text-sm font-medium text-gray-600">
               Email
             </label>
             <input
               type="email"
               id="email"
               name="email"
               className="mt-1 p-2 w-full border rounded focus:ring focus:ring-indigo-200"
             />
           </div>
           <div className="mb-4">
             <label htmlFor="password" className="block text-sm font-medium text-gray-600">
               Password
             </label>
             <input
               type="password"
               id="password"
               name="password"
               className="mt-1 p-2 w-full border rounded focus:ring focus:ring-indigo-200"
             />
           </div>
           <button
             type="submit"
             className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 focus:ring focus:ring-indigo-200"
           >
             Sign Up
           </button>
         </form>
       </div>
     </div>
   );
 };
 
 