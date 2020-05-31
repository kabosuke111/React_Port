import {ActionTypes} from '../ActionTypes';
import {PageName, PageActionType} from './type';
import {PageData} from '../PageData';

const initialState: PageName = {
    page_name: PageData.top.link,
    page_title: PageData.top.name,
    page_japanese_title: PageData.top.jpname,
}

export const pageReducer = (state = initialState, action: PageActionType): PageName => {
    switch(action.type) {
        case ActionTypes.top:
            return {
                ...state, page_name: PageData.top.link,
            }
        case ActionTypes.depression:
            return {
                ...state, 
                page_name: PageData.depression.link,
                page_title: PageData.depression.name,
                page_japanese_title: PageData.depression.jpname,
            }
        case ActionTypes.disaster:
            return {
                ...state, 
                page_name: PageData.disaster.link,
                page_title: PageData.disaster.name,
                page_japanese_title: PageData.disaster.jpname,
            }
        default:
            return state;
    }
}

