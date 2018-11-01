import { combineReducers } from "redux";
import BooksReducer from './reducer_books'
import ActiveBook from "./reducer_active_book";
import Portfolio from './reducer_portfolio';
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook,
    portfolio: Portfolio
})

export default rootReducer