import { CHANGE_QUOTE } from './types';

export const newQuote = (quote, author) => {
  return {
    type: CHANGE_QUOTE,
    quote,
    author
  }
}