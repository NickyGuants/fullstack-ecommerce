import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './redux/reducers/productReducers'

const reducers = combineReducers({
    productList: productListReducer
});
const middleware = [thunk];
const initialState = {};
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
