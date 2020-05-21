// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import claimFormReducer from './claimFormReducer';
import messageReducer from './messageReduccer';

// Redux: Root Reducer
const rootReducer:any = combineReducers({
    claimForm: claimFormReducer,
    messageReducer: messageReducer
});
// Exports
export default rootReducer;