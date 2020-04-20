import {createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducerWithInitialState} from 'typescript-fsa-reducers';
import {actionCreatorFactory} from '../node_modules/typescript-fsa';

export interface State {
    site_title: string;
}

interface ActionType {
    type: string;
    payload: number | string;
}

export const initialState: State = {
    site_title: 'GREY',
}

export const reducer = (state = initialState, action: ActionType) => {
    switch(action.type) {
        case 'CHANGE_TEXT':
            return {
                ...state,
                site_title: "KAWATTAYO",
            }
        default: return state;
    }
}

const store = createStore(reducer);

export default store;