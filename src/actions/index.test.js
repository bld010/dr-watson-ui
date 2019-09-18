import {
  createUser,
  removeUser,
  hasErrored,
  addMessage,
  clearMessages
} from './index';

describe('actions', () => {
  describe('createUser', () => {
    it(`should return an object with type of 
        'CREATE_USER' and user object`, () => {
          
          let mockUser = {name: 'Brianna'}
          let expected = {
            type: 'CREATE_USER',
            user: mockUser
          }
          expect(createUser(mockUser)).toEqual(expected)
        })
  })

  describe('removeUser', () => {
    it(`should return an object with type 'REMOVE_USER'`, () => {
      
      let expected = { type: 'REMOVE_USER'}

      expect(removeUser()).toEqual(expected)
    })
  })

  describe('hasErrored', () => {
    it(`should return an object with type 'HAS_ERRORED 
      and an error message`, () => {

      let mockErrorMsg = 'Something went wrong.'
      let expected = {
        type: 'HAS_ERRORED',
        errorMsg: 'Something went wrong.'
      }

      expect(hasErrored(mockErrorMsg)).toEqual(expected)
    })
  })

  describe('addMessage', () => {
    it(`should return an object with a type of 'ADD_MESSAGE'
    and a message object with a message and isUser boolean`, () => {
      let mockMessage = 'Hello'
      let mockIsUser = false
      let expected = {
        type: 'ADD_MESSAGE',
        message: { 
          message: mockMessage,
          isUser: mockIsUser }
      }

      expect(addMessage('Hello', false)).toEqual(expected)
    })
  })

  describe('clearMessages', () => {
    it('should return an object with type CLEAR_MESSAGES', () => {
      let expected = { type: 'CLEAR_MESSAGES' }
      
      expect(clearMessages()).toEqual(expected)
    })
  })
})

