import {combineReducers} from 'redux'
// import { } from '../state/contact';
import ContactReducer from "../state/contact"
//import {ProfileReducer} from "../state/profile";

// Added all reducers in  project  and  generate  one main reducer for Store
const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  
  contactreducer:ContactReducer,
 // productReducer:ProductReducer,
  
  
  // globalSlice: GlobalSlice,
  // globalData: GlobalReducer,
})

export default rootReducer