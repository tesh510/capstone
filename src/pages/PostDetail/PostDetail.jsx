import * as postsAPI from '../../utilities/posts-api';
import { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import { useParams, useNavigate } from 'react-router-dom';
import NewPosts from '../../pages/NewPosts/NewPosts';


export default function PostDetail ({ posts, setPosts }) {
    const [showForm, setShowForm] = useState(false)
    const { id } = useParams()
    const post = posts.find(p => p._id === id )

    async function deletePost() {
      const removed = await postsAPI.deletePost(post._id);
      const updatePosts = posts.filter(post => post._id !== removed._id);
      setPosts = {updatePosts};
      // Navigate('/posts');
    }

    return (
      <>
      {
        showForm 
           ? <NewPosts post= {post} setPosts={setPosts}  /> 
           : <div>
                <h1>Edit Post</h1>
                <p> { post.content } </p>
                <button onClick= {() => setShowForm(true) }>Edit</button>
                <button onClick= {deletePost}>Delete</button>
            </div>

        }
      </>
    );
  }