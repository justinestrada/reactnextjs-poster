import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost({onCancel, onAddPost}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    console.log('submitHandler postData', postData)
    onAddPost(postData);
    onCancel();
  }
  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required  onChange={authorChangeHandler}/>
        </p>
        <p className={classes.actions}>
        <Link type="button" to="..">Cancel</Link>
        <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;