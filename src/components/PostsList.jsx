
import { useState, useEffect } from 'react';

// import Modal from './Modal';
// import NewPost from '../routes/NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList () {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      if (!response.ok) {
        console.error('error fetching')
      }
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          <Post key="unique129837" author="static" body="staticbody"/>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body}/>
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts...</p>
        </div>
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
