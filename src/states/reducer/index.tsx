// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import claimFormReducer from './claimFormReducer';
import claimFormStateReducer from './claimFormStateReducer';
import messageReducer from './messageReduccer';

// Redux: Root Reducer
const rootReducer:any = combineReducers({
    claimForm: claimFormReducer,
    claimFormState: claimFormStateReducer,
    messageReducer: messageReducer
});
// Exports
export default rootReducer;