import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getComments } from '../../selectors/commentSelector';
import Comment from './Comment';

const CommentList = ({ postIndex }) => {
  const comments = useSelector(getComments);
  const commentsArray = comments[postIndex] || [];
  console.log(commentsArray);

  const commentElements = commentsArray.map((comment, i) => (
    <li key={i}>
      <Comment comment={comment} commentIndex={i} postIndex={postIndex}/>
    </li>
  ));

  return (
    <ul>
      {commentElements}
    </ul>
  );
};

CommentList.propTypes = {
  postIndex: PropTypes.string.isRequired
};

export default CommentList;
