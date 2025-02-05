import { Link } from "react-router-dom";
import BlogCard2 from "./BlogCard2";
import { useNavigate } from "react-router-dom";

const posts = [
  { id: 1, title: "React Basics", content: "Learn the basics of React." },
  { id: 2, title: "React Router", content: "Learn how to use React Router." },
  { id: 3, title: "React Hooks", content: "Explore React Hooks in detail." },
];
const blogData = [
    {
      id: 1,
      image: "/Nam.jpg", // Replace with actual image URL
      date: "July 18, 2021",
      title: "Nam pharetra fringilla justo, et commodo lacus molestie ut",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
      readmore:"Read more"
    },
    {
      id: 2,
      image: "/fusceVeljpg.jpg",
      date: "July 18, 2021",
      title: "Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
      readmore:"Read more"
    },
    {
      id: 3,
      image: "/duis.jpg",
      date: "July 18, 2021",
      title: "Duis lacinia convallis odio, quis efficitur dolor pulvinar nec",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
      readmore:"Read more"
    },
  ];
function Home() {
  return (
    <div>
      <div>
        {blogData.map((blog) => (
          <div key={blog.id} >
           <Link to={`/posts/${blog.id}`}> 
           <p>{blog.description}</p>
           </Link>
          </div>
        ))}
  </div>
    </div>
  );
}

export default Home;
