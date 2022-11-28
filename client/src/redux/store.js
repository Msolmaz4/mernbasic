//css bittikten sonra redux duyenlemeye basladik 
//actions klasoru yaprtik reducers contabnsts
//sonra store duyenlemeye deveam ederiz
//altarmak icin createStore yapariy sonra birlestirici combine 
import { createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTolls} from 'redux-devtools-extension'
//ice akatarmayi buturdik

const reducer =combineReducers({

})

const middlerware = [thunk]

const store =createStore(
    reducer,
    composeWithDevTolls(applyMiddleware(...middlerware))

)

export default store
//redux temelde kurukdu simdi baglantuya geciyoruz