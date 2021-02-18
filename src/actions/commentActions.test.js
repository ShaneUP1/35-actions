import { createComment, CREATE_COMMENT } from "./commentActions"

describe('comment actions', () => {
  it('creates a CREATE_COMMENT action', () => {
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
  });
});
