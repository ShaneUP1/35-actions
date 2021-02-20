/* eslint-disable max-len */
import { createComment, CREATE_COMMENT, deleteAllComments, deleteComment, DELETE_ALL_COMMENTS, DELETE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('creates a CREATE_COMMENT action and a DELETE_COMMENT action', () => {
    const action = createComment(0, 'This was a great post.');

    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: {
        postIndex: 0,
        comment: 'This was a great post.'
      }
    });
    
    const deleteAction = deleteComment(0, 0);
    
    expect(deleteAction).toEqual({
      type: DELETE_COMMENT,
      payload: {
        postIndex: 0,
        commentIndex: 0
      }
    });

    const deleteAllAction = deleteAllComments(0);

    expect(deleteAllAction).toEqual({
      type: DELETE_ALL_COMMENTS,
      payload: 0
    });
  });
});
