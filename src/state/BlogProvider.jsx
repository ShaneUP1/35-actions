import React, { createContext, useReducer } from 'react';
import reducer, { initialState } from '../reducers/blogReducer';

const BlogContext = createContext(null);

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    < BlogContext.Provider value={{ state, dispatch }} >
      {children}
    </BlogContext.Provider>
  );
};