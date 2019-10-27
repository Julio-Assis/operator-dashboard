import { createReducer } from 'redux-act';

export enum ErrorCausesTypes {
    GET_ERROR_CAUSES_REQUEST = '@@error_causes/GET_ERROR_CAUSES_REQUEST',
    GET_ERROR_CAUSES_SUCCESS = '@@error_causes/GET_ERROR_CAUSES_SUCCESS',
    GET_ERROR_CAUSES_ERROR = '@@error_causes/GET_ERROR_CAUSES_ERROR',
}

export interface IErrorCause {
    id: number,
    name: string,
}

export interface IGetErrorCausesRequest {
    type: ErrorCausesTypes.GET_ERROR_CAUSES_REQUEST,
    payload: null,
}

export interface IGetErrorCausesSuccess {
    type: ErrorCausesTypes.GET_ERROR_CAUSES_SUCCESS,
    payload: {
        errorCauses: IErrorCause[],
    }
}

export interface IGetErrorCausesError {
    type: ErrorCausesTypes.GET_ERROR_CAUSES_ERROR,
    payload: {
        error: any
    };
}

export const getErrorCausesRequest = (): IGetErrorCausesRequest => ({
    type: ErrorCausesTypes.GET_ERROR_CAUSES_REQUEST,
    payload: null,
});

export const getErrorCausesSuccess = (errorCauses: IErrorCause[]): IGetErrorCausesSuccess => ({
    type: ErrorCausesTypes.GET_ERROR_CAUSES_SUCCESS,
    payload: {
        errorCauses,
    }
});

export const getErrorCausesError = (error: any): IGetErrorCausesError => ({
    type: ErrorCausesTypes.GET_ERROR_CAUSES_ERROR,
    payload: {
        error,
    }
});

export interface IErrorCausesState {
    isFetching: boolean,
    errorCauses: IErrorCause[],
    error: any,
}

const initialState: IErrorCausesState = {
    isFetching: false,
    errorCauses: [],
    error: null,
} 


export const errorCausesReducer = createReducer({
    [ErrorCausesTypes.GET_ERROR_CAUSES_REQUEST]: (state: IErrorCausesState) => {
        return {
            ...state,
            isFetching: true
        };
    },
    [ErrorCausesTypes.GET_ERROR_CAUSES_SUCCESS]: (state: IErrorCausesState, action: IGetErrorCausesSuccess['payload']) => {
        return {
            ...state,
            isFetching: false,
            errorCauses: action.errorCauses,
        }
    },
    [ErrorCausesTypes.GET_ERROR_CAUSES_ERROR]: (state: IErrorCausesState, action: IGetErrorCausesError['payload']) => {
        return {
            ...state,
            isFetching: false,
            error: action.error
        }
    }
}, initialState);
