import { user } from '../reducers/user.js';

describe('user reducer', () => {


  it('should return null (default state) if state is undefined and action does not match', () => {

    let mockAction = {
      type: 'ADD_MESSAGE',
      user: { name: 'Joe' }
    }

    expect(user(undefined, mockAction)).toEqual(null);

  })

  it('should return the state if action does not match', () => {
    let mockAction = {
      type: 'ADD_MESSAGE',
      user: { name: 'Joe' }
    }

    let mockState = { name: 'Bill' }

    expect(user(mockState, mockAction)).toEqual(mockState)
  })

  it('should return the new user if action type is CREATE_USER', () => {

    let mockAction = {
      type: 'CREATE_USER',
      user: { name: 'Joe' }
    }

    let mockState = { name: 'Bill' }

    expect(user(mockState, mockAction)).toEqual({ name: 'Joe' })
  })

  it('should return null if action type is REMOVE_USER regardless of state', () => {

    let mockAction = {
      type: 'REMOVE_USER',
      user: { name: 'Joe' }
    }

    let mockState = { name: 'Bill' }


    expect(user(mockState, mockAction)).toEqual(null);
    expect(user(undefined, mockAction)).toEqual(null);
  })


})