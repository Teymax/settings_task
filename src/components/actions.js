import { types } from './types'

export const optionsActions = {
  fillProfile: (profile) => {
    return {
      type: types.OPTIONS_FILL,
      payload: profile,
    }
  }
}