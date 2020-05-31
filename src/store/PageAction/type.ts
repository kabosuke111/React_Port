import {ActionTypes} from '../ActionTypes';
import {Action} from 'redux';

export type PageName = {
    page_name: string;
    page_title: string;
    page_japanese_title: string;
}

interface Top extends Action {
    type: typeof ActionTypes.top;
}

interface Depression extends Action {
    type: typeof ActionTypes.depression;
}

interface Disaster extends Action {
    type: typeof ActionTypes.disaster;
}


export type PageActionType = Top | Depression | Disaster;