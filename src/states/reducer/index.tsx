// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import claimFormReducer from './claimFormReducer';

// Redux: Root Reducer
const rootReducer:any = combineReducers({
    claimForm: claimFormReducer
});
// Exports
export default rootReducer;