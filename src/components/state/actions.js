import { types } from './types'

export const stateActions = {
  fillProfile: (profile) => {
    return {
      type: types.STATE_FILL,
      payload: profile,
    }
  }
}