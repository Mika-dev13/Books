import { ADD_BOOKS } from '../reducers/constants'

export const addBook = (data) => {
  return {
    type: ADD_BOOKS,
    payload: data /*object*/,
  }
}
