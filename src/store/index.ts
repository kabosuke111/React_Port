import {combineReducers, createStore} from 'redux';
import {pageReducer} from './PageAction/reducer';

const rootReducer = combineReducers({
    page_action: pageReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export default store;