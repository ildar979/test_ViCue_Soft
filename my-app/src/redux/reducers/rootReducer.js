import { combineReducers } from 'redux'
import { beerReducer } from './beerReducer'
import { beersReducer } from './beersReducer'
import { perReducer } from './perReducer'

export const rootReducer = combineReducers({
  beers: beersReducer,
  per: perReducer,
  beer: beerReducer,
})

