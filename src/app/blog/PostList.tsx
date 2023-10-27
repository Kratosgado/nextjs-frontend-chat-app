import Link from "next/link";



export default function PostList(posts: Post[]) {
   return (
      <ul>
         {posts.map((post) => (
            <li key={post.id}>
               <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
         ))}
      </ul>
   )
}

export type Post = {
   id: string;
   title: string;
   slug: string;
}