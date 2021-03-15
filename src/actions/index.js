export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CUR_MEM = 'CUR_MEM';
export const TOT_MEM = 'TOT_MEM';
export const CLR_MEM = 'CLR_MEM';
export const CLEAR_DSPLAY = 'CLEAR_DSPLAY';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return({type:CLEAR_DSPLAY});
}

export const currentMemory = () => {
    return({type:CUR_MEM})
}
export const totalMemory = () => {
    return({type:TOT_MEM})
}
export const clearMemory = () => {
    return({type:CLR_MEM})
}