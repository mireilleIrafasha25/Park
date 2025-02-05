import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Basics", content: "Learn the basics of React." },
  { id: 2, title: "React Router", content: "Learn how to use React Router." },
  { id: 3, title: "React Hooks", content: "Explore React Hooks in detail." },
];

function Home() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
