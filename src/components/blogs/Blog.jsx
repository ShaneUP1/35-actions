import React from 'react';
import PropTypes from 'prop-types';
import { deleteBlog } from '../../actions/blogActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAllComments } from '../../actions/commentActions';

const Blog = ({ title, body, postIndex }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBlog(title));
    dispatch(deleteAllComments(postIndex));
  };

  return (
    <>
      <span>
        <Link to={`/${postIndex}`}>
          <h2>{title}</h2>
        </Link>
        <p>{body}</p>
        <button onClick={handleClick}>Delete</button>
      </span>
    </>
  );
};

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  postIndex: PropTypes.number.isRequired
};

export default Blog;
