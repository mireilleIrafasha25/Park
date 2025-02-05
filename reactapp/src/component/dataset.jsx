import { useParams } from "react-router-dom";

function SomeComponent() {
  // Grab the parameters from the URL
  let params = useParams();
  
  // Log params to check what we're getting
  console.log(params);  // This will show the entire params object

  // Extract postId from the params object
  const { postId } = params;

  // Check if postId is undefined or malformed and handle it
  if (!postId) {
    return <div>Post not found!</div>;
  }

  // Log the postId to confirm it's being accessed correctly
  console.log(`Fetching details for post with ID: ${postId}`);

  return (
    <div>
      <h1>Post Details</h1>
      <p>Displaying content for post ID: {postId}</p>
      {/* Use postId to fetch and display post data */}
    </div>
  );
}

export default SomeComponent;
