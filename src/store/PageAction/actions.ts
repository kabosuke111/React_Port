import {ActionTypes} from '../ActionTypes';
import {PageActionType} from './type';


export const ChangeTop = (): PageActionType => {
    return {
        type: ActionTypes.top
    }
}

export const ChangeDepression = (): PageActionType => {
    return {
        type: ActionTypes.depression
    }
}

export const ChangeDisaster = (): PageActionType => {
    return {
        type: ActionTypes.disaster
    }
}
