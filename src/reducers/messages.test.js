import { messages } from './messages';

describe('messages reducer', () => {
  it('should return an empty array (default state) if action type does not match and state is undefined', () => {
    let mockAction = {
      type: 'DO_SOMETHING',
      message: { message: 'Hi', isUser: true }
    }

    expect(messages(undefined, mockAction)).toEqual([])
  })

  it('should return state if action type does not match', () => {
    let mockState = [1, 2, 3]

    let mockAction = {
      type: 'DO_SOMETHING',
      message: { message: 'Hi', isUser: true }
    }

    expect(messages(mockState, mockAction)).toEqual(mockState)
  })

  it('should return an empty array if action type is CLEAR_MESSAGES', () => {
    let mockState = [2, 3, 4]
    let mockAction = {
      type: 'CLEAR_MESSAGES',
      message: { message: 'Hi', isUser: true }
    }

    expect(messages(mockState, mockAction)).toEqual([])
  })

  describe('ADD_MESSAGE case', () => {

    it('should return an array of the original state plus the new message if action type is ADD_MESSAGE', () => {
      let mockState = [
        { message: 'Hi', isUser: true },
        { message: 'Hello', isUser: false },
        { message: 'Hey', isUser: true }
      ]

      let mockMessage = { message: 'Yo', isUser: false }
  
      let expected = [ ...mockState, mockMessage ]

      let mockAction = {
        type: 'ADD_MESSAGE',
        message: { message: 'Yo', isUser: false }
      }

      expect(messages(mockState, mockAction)).toEqual(expected)
    })


    it('should return an array containing only the new message if state was an empty array', () => {
      let mockState = []

      let mockMessage = { message: 'Yo', isUser: false }
  
      let expected = [ mockMessage ]

      let mockAction = {
        type: 'ADD_MESSAGE',
        message: { message: 'Yo', isUser: false }
      }

      expect(messages(mockState, mockAction)).toEqual(expected)
    })
  })


})