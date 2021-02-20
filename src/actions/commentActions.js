export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (postIndex, comment) => ({
  type: CREATE_COMMENT,
  payload: { postIndex, comment }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postIndex, commentIndex) => ({
  type: DELETE_COMMENT,
  payload: { postIndex, commentIndex }
});

export const DELETE_ALL_COMMENTS = 'DELETE_ALL_COMMENTS';
export const deleteAllComments = (postIndex) => ({
  type: DELETE_ALL_COMMENTS,
  payload: postIndex
});
