import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer } from './redux/reducers/productReducers'

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer

});
const middleware = [thunk];
const initialState = {};
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
