import { createReducer } from 'redux-act';


enum MachinesTypes {
    GET_MACHINES_REQUEST = '@@machines/GET_MACHINES_REQUEST',
    GET_MACHINES_SUCCESS = '@@machines/GET_MACHINES_SUCCESS',
    GET_MACHINES_ERROR = '@@machines/GET_MACHINES_ERROR',
}

interface IMachine {
    id: number,
    name: string,
}

export interface IGetMachinesRequest {
    type: MachinesTypes.GET_MACHINES_REQUEST,
    payload: null,
}

export interface IGetMachinesSuccess {
    type: MachinesTypes.GET_MACHINES_SUCCESS,
    payload: {
        machines: IMachine[],
    }
}

export interface IGetMachinesError {
    type: MachinesTypes.GET_MACHINES_ERROR,
    payload: {
        error: any
    };
}

export const getMachinesRequest = (): IGetMachinesRequest => ({
    type: MachinesTypes.GET_MACHINES_REQUEST,
    payload: null,
});

export const getMachinesSuccess = (machines: IMachine[]): IGetMachinesSuccess => ({
    type: MachinesTypes.GET_MACHINES_SUCCESS,
    payload: {
        machines,
    }
});

export const getMachinesError = (error: any): IGetMachinesError => ({
    type: MachinesTypes.GET_MACHINES_ERROR,
    payload: {
        error,
    }
});

export interface IMachineState {
    isFetching: boolean,
    machines: IMachine[],
    error: any,
}

const initialState: IMachineState = {
    isFetching: false,
    machines: [],
    error: null,
} 


export const machinesReducer = createReducer({
    [MachinesTypes.GET_MACHINES_REQUEST]: (state: IMachineState) => {
        return {
            ...state,
            isFetching: true
        };
    },
    [MachinesTypes.GET_MACHINES_SUCCESS]: (state: IMachineState, action: IGetMachinesSuccess) => {
        return {
            ...state,
            isFetching: false,
            machines: action.payload.machines,
        }
    },
    [MachinesTypes.GET_MACHINES_ERROR]: (state: IMachineState, action: IGetMachinesError) => {
        return {
            ...state,
            isFetching: false,
            error: action.payload.error
        }
    }
}, initialState);
