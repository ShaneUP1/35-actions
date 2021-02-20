/* eslint-disable max-len */
import { CREATE_COMMENT, DELETE_ALL_COMMENTS, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type){
    case CREATE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: [
          ...(state[action.payload.postIndex] || []),
          action.payload.comment
        ]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex] : [
          ...state[action.payload.postIndex].filter((_, i) => i !== action.payload.commentIndex)
        ] 
      };
    case DELETE_ALL_COMMENTS:
      return {
        ...state,
        [action.payload] : []
      };
    default:
      return state;
  }
}
