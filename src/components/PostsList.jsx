
import { useState, useEffect } from 'react';

import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList ({isPosting, onStopPosting}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    // setPosts([postData, ...]);
    setPosts((existingPosts) => [postData, ...existingPosts]); // best technique of updating state if it depends on previous state snapshot
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          <Post key="unique129837" author="static" body="staticbody"/>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body}/>
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>No posts yet, start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
