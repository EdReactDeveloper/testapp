import { combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth'; 
import list from './list';
import search from './search';
import inprogress from './inprogress'; 
import alert from './alert'; 

const createRootReducer = history =>{
	 return combineReducers({
		router: connectRouter(history),
		auth, 
		list, 
		search, 
		inprogress,
		alert
	});
}

export default createRootReducer