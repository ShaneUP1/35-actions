import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

const Comment = ({ postIndex, comment, commentIndex }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteComment(postIndex, commentIndex));
  };

  return (
    <div>
      <p>{comment}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  commentIndex: PropTypes.number.isRequired,
  postIndex: PropTypes.string.isRequired
};

export default Comment;
