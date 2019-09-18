import { errorMsg } from './errorMsg';

describe('errorMsg reducer', () => {
  it('should return an empty string if state is undefined and action type does not match', () => {
    let mockAction = {
      type: 'DO_SOMETHING',
      errorMsg: 'Something went wrong.'
    }
    
    expect(errorMsg(undefined, mockAction)).toEqual('')
  })

  it('should return state if action type does not match', () => {
    let mockState = 'ERROR ERROR ERROR'

    let mockAction = {
      type: 'DO_SOMETHING',
      errorMsg: 'Something went wrong.'
    }

    expect(errorMsg(mockState, mockAction)).toEqual(mockState)
  })

  it('should return the action error message from the action when action type matches', () => {
    let mockState = 'ERROR ERROR ERROR'

    let mockAction = {
      type: 'HAS_ERRORED',
      errorMsg: 'Something went wrong.'
    }

    expect(errorMsg(mockState, mockAction)).toEqual('Something went wrong.')
  })
})