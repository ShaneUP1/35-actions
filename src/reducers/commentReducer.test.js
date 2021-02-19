import { createComment, deleteComment } from '../actions/commentActions';
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

  it('deletes a comment with DELETE_COMMENT action', () => {
    const state = {
      0: ['great post', 'good work'],
      1: ['nice']
    };

    const deleteAction = deleteComment(0, 1);
    const newState = reducer(state, deleteAction);
    
    expect(newState).toEqual({
      0: ['great post'],
      1: ['nice']
    });
  });
});
