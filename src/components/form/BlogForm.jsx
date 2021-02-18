import React, { useState } from 'react';
import { createBlog } from '../../actions/blogActions';
import { useDispatch } from '../../state/BlogProvider';


const BlogForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createBlog({ title, body }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)} 
      />

      <textarea
        rows="30"
        cols="40"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      />

      <button>Submit</button>
    </form>
  );
};

export default BlogForm;
