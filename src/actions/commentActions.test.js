/* eslint-disable max-len */
import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('creates a CREATE_COMMENT action and a DELETE_COMMENT action', () => {
    const action = createComment({
      postTitle: 'Blog Post Title',
      postComment: 'This was a great post.'
    });

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: {
        postTitle: 'Blog Post Title',
        postComment: 'This was a great post.'
      }
    });
    
    const deleteAction = deleteComment('This was a great post.');
    
    expect(deleteAction).toEqual({
      type: DELETE_COMMENT,
      payload: 'This was a great post.'
    });
  });
});
