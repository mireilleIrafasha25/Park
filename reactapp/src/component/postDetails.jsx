import { useParams } from "react-router-dom";

const posts = [
  { id: 1, title: "React Basics", content: "Learn the basics of React." },
  { id: 2, title: "React Router", content: "Learn how to use React Router." },
  { id: 3, title: "React Hooks", content: "Explore React Hooks in detail." },
];

function PostDetails() {
  const { postId } = useParams(); // Extract the postId from the URL
  const post = posts.find((p) => p.id === parseInt(postId));
  
  if (!post) return <p>Post not found!</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetails;
