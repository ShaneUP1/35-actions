import React from 'react';
import Blog from './Blog';
import { getBlogs } from '../../selectors/blogSelector';
import { useSelector } from 'react-redux';

const BlogList = () => {
  const blogs = useSelector(getBlogs);

  const blogElements = blogs.blogs.map((blog, i) => (
    <li key={blog.title}>
      <Blog {...blog} postIndex={i} />
    </li>
  ));

  return (
    <ul>
      {blogElements}
    </ul>
  );
};

export default BlogList;
