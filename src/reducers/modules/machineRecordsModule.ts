import { createReducer } from 'redux-act';


export enum MachineRecordsTypes {
    GET_MACHINE_RECORDS_REQUEST = '@@machine_records/GET_MACHINE_RECORDS_REQUEST',
    GET_MACHINE_RECORDS_SUCCESS = '@@machine_records/GET_MACHINE_RECORDS_SUCCESS',
    GET_MACHINE_RECORDS_ERROR = '@@machine_records/GET_MACHINE_RECORDS_ERROR',
}

export interface ICauseRecord {
    id: number,
    machine_record: number,
    extras?: string,
}

export interface IVariableRecord {
    id: number,
    machine_record: number,
    value: string,
    timestamp: string,
}

export interface IMachineRecord {
    id: number,
    machine: number,
    status: boolean,
    stop_timestamp: string,
    duration: number,
    name: string,
    variable_records: IVariableRecord[],
    cause_records: ICauseRecord[],
}

export interface IGetMachineRecordsRequest {
    type: MachineRecordsTypes.GET_MACHINE_RECORDS_REQUEST,
    payload: null,
}

export interface IGetMachineRecordsSuccess {
    type: MachineRecordsTypes.GET_MACHINE_RECORDS_SUCCESS,
    payload: {
        machineRecords: IMachineRecord[],
    }
}

export interface IGetMachineRecordsError {
    type: MachineRecordsTypes.GET_MACHINE_RECORDS_ERROR,
    payload: {
        error: any
    };
}

export const getMachineRecordsRequest = (): IGetMachineRecordsRequest => ({
    type: MachineRecordsTypes.GET_MACHINE_RECORDS_REQUEST,
    payload: null,
});

export const getMachineRecordsSuccess = (machineRecords: IMachineRecord[]): IGetMachineRecordsSuccess => ({
    type: MachineRecordsTypes.GET_MACHINE_RECORDS_SUCCESS,
    payload: {
        machineRecords,
    }
});

export const getMachineRecordsError = (error: any): IGetMachineRecordsError => ({
    type: MachineRecordsTypes.GET_MACHINE_RECORDS_ERROR,
    payload: {
        error,
    }
});

export interface IMachineRecordState {
    isFetching: boolean,
    machines: IMachineRecord[],
    error: any,
}

const initialState: IMachineRecordState = {
    isFetching: false,
    machines: [],
    error: null,
} 


export const machineRecordsReducer = createReducer({
    [MachineRecordsTypes.GET_MACHINE_RECORDS_REQUEST]: (state: IMachineRecordState) => {
        return {
            ...state,
            isFetching: true
        };
    },
    [MachineRecordsTypes.GET_MACHINE_RECORDS_SUCCESS]: (state: IMachineRecordState, action: IGetMachineRecordsSuccess) => {
        return {
            ...state,
            isFetching: false,
            machineRecords: action.payload.machineRecords,
        }
    },
    [MachineRecordsTypes.GET_MACHINE_RECORDS_ERROR]: (state: IMachineRecordState, action: IGetMachineRecordsError) => {
        return {
            ...state,
            isFetching: false,
            error: action.payload.error
        }
    }
}, initialState);
