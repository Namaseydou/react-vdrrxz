import React from 'react';
import axios from 'axios';
import './style.css';

const client=axios.create({
  baseURL = 'https://jsonplaceholder.typicode.com/posts/'
});

export default function App() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    async function getPost(){
      const response= await client.get("/1");
      setPost(response.data);
    }
    getPost();
  }, []);

  async function deletePost(){
    await client.delete("/1"); 
      alert ("Post deleted!");
      setPost(null);
    }
  //if (error) return `Error:${error.message}`;
  if (!post) return 'No post!';
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>delete Post </button>
    </div>
  );
}
