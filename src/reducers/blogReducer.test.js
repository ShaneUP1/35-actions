/* eslint-disable max-len */
import { createBlog, deleteBlog } from '../actions/blogActions';
import reducer from './blogReducer';

describe('blog reducer', () => {
  it('add a blog with CREATE_BLOG action and then delete a blog with DELETE_BLOG action', () => {
    const state = {
      blogs: [{ title: 'Pre-loaded Blog', body: 'and it has text' }]
    };

    const createActionOne = createBlog({
      title: 'First Blog',
      body: 'Here it is in all its glory'
    });

    const newState = reducer(state, createActionOne);
    
    expect(newState.blogs).toHaveLength(2);
    
    const deleteAction = deleteBlog('First Blog');
    const newStateTwo = reducer(state, deleteAction);

    expect(newStateTwo).toEqual({
      blogs: [{ title: 'Pre-loaded Blog', body: 'and it has text' }]
    });

  });
});
