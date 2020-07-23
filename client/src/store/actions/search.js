import {SEARCH} from './types/search'; 

export const searchQueryAction = (query) => dispatch=>{
  dispatch({type: SEARCH, payload: query})
}