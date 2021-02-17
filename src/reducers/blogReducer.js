import { CREATE_BLOG } from '../actions/blogActions';

export const initialState = {
  blogs: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case CREATE_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload]
      };
    default:
      return state;
  } 
}
