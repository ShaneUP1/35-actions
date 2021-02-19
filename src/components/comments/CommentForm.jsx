import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../../selectors/blogSelector';
import { createComment } from '../../actions/commentActions';

const CommentForm = ({ postIndex }) => {
  const dispatch = useDispatch();

  const blogs = useSelector(getBlogs);
  const thisBlog = blogs.blogs[postIndex];
  
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createComment(postIndex, comment));
    setComment('');
  };

  return (
    <>
      <div>
        <h2>{thisBlog.title}</h2>
        <p>{thisBlog.body}</p>
      </div>
      <h3>Add a Comment</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="10"
          cols="20"
          placeholder="Your comment here..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}/>
        <button>Submit</button>
      </form>
    </>
  );
};

CommentForm.propTypes = {
  postIndex: PropTypes.string.isRequired
};

export default CommentForm;
