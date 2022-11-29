//css bittikten sonra redux duyenlemeye basladik 
//actions klasoru yaprtik reducers contabnsts
//sonra store duyenlemeye deveam ederiz
//altarmak icin createStore yapariy sonra birlestirici combine 
import { createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
//ice akatarmayi buturdik

//buraya redicers
import { cartReducer} from './reducers/cartReducers'
import {getProductDetailsReducer, getProductsReducer} from './reducers/productReducers'
const reducer =combineReducers({
    cart:cartReducer,
    getProducts:getProductsReducer,
    getProductsDetails:getProductDetailsReducer

})

const middlerware = [thunk]

const store =createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlerware))

)

export default store
//redux temelde kurukdu simdi baglantuya geciyoruz
//sonra contants geciyoruy ilk olarak burayau ya[ti]
//BURADA SABILERI YAPARIZ URUN SABITLERI VE CART DSABILTLERI