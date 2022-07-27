import { initState } from '../initState'

export const beersReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_BEERS':
      return [ ...payload ]
    default:
      return state;
  }
}
