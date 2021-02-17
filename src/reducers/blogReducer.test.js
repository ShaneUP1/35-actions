import { createBlog } from "../actions/blogActions";
import reducer from "./blogReducer";

describe('blog reducer', () => {
  it('add a blog with CREATE_BLOG action', () => {
    const state = {
      blogs: []
    };

    const action = createBlog({
      title: 'First Blog',
      body: 'Here it is in all its glory'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      blogs: [{ title: 'First Blog', body: 'Here it is in all its glory' }]
    });
  });
});