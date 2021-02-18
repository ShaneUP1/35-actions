import { getBlogs } from './blogSelector';

describe('blog selector', () => {
  it('should select the list of blogs from state', () => {
    const state = {
      blogs: [{ title: 'blog title', body: 'blog body' }]
    };

    const blogs = getBlogs(state);

    expect(blogs).toEqual([{ title: 'blog title', body: 'blog body' }]);
  
  });
});
