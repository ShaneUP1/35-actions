import React from 'react';
import BlogList from '../blogs/BlogList';
import BlogForm from '../form/BlogForm';
import './App.css';

export default function App() {
  return (
    <>
      <BlogForm />
      <BlogList />
    </>
  );
}
