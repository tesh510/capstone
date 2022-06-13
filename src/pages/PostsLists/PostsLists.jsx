import * as postsAPI from '../../utilities/posts-api';
import { useState, useEffect } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import './PostsList.css';


export default function PostsLists ({ posts }) {

    return (
      <>
      <div className="PostCard">
        <h1>List of Posts</h1>
        {posts.map(p => <PostCard post={p} />) }
      </div>
      </>
    );
  }