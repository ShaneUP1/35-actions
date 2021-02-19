import { createComment } from '../actions/commentActions';
import reducer from './commentReducer';

describe('Comment Reducer', () => {
  it('adds a comment with CREATE_COMMENT action', () => {
    const state = {
      0: ['great post', 'good work'],
      1: ['nice']
    };

    const createAction = createComment(0, 'awesome post!');
    const newState = reducer(state, createAction);
    
    expect(newState).toEqual({
      0: ['great post', 'good work', 'awesome post!'],
      1: ['nice']
    });
  });
});
