import React from 'react';
import PropTypes from 'prop-types';
import { deleteBlog } from '../../actions/blogActions';
import { useDispatch } from 'react-redux';

const Blog = ({ title, body }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBlog(title));
  };

  return (
    <>
      <span>
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={handleClick}>Delete</button>
      </span>
    </>
  );
};

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Blog;
