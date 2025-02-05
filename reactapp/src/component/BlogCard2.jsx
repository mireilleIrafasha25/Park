import React from "react";
import { useParams } from "react-router-dom";
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

const BlogCard2 = () => {
  const {blogId}=useParams();
  const blog=blogData.find((p)=> p.id === parseInt(blogId));
   console.log(blogId);
   if(!blog) return <p>No blog found</p>;

  return (
    <div>
      <style>
        {`
          .blog-list {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            margin-bottom: 30px;
          }

          .blog-card {
            width: 350px;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }

          .blog-card:hover {
            transform: scale(1.05);
          }

          .blog-card img {
            width: 100%;
            height: auto;
          }

          .blog-content {
            padding: 15px;
          }

          .date {
            font-size: 14px;
            color: gray;
          }

          h3 {
            font-size: 18px;
            margin: 10px 0;
          }

          .description {
            font-size: 14px;
            color: #555;
          }
        `}
      </style>

      <div className="blog-list">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt="blog" />
            <div className="blog-content">
              <p className="date">{blog.date}</p>
              <h3>{blog.title}</h3>
              <p className="description">{blog.description}</p>
              <div style={{marginTop:"30px"}}><a href="#" className="readmore" style={{color:"black",fontSize:"15px"}}>{blog.readmore}</a></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCard2;
