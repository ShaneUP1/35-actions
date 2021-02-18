/* eslint-disable max-len */
import { createBlog, CREATE_BLOG, deleteBlog, DELETE_BLOG } from './blogActions';

describe('blog actions', () => {
  it('creates a create blog action and then a delete blog action', () => {
    const createAction = createBlog({
      title: 'Blog Title 1',
      body: 'Blog 1 body text'
    });

    expect(createAction).toEqual({
      type: CREATE_BLOG,
      payload: { title: 'Blog Title 1', body: 'Blog 1 body text' }
    });

    const deleteAction = deleteBlog('Blog Title 1');
    expect(deleteAction).toEqual({
      type: DELETE_BLOG,
      payload: 'Blog Title 1'
    });
  });
});
