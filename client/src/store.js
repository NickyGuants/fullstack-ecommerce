import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer } from './redux/reducers/productReducers'
import cartReducer from './redux/reducers/cartReducers';
import { userLoginReducer } from './redux/reducers/userReducers'

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
});
const middleware = [thunk];
const initialState = {};
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
