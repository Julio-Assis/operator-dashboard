import { RouterState } from 'react-router-redux';
import { IMachineState } from './modules/machinesModule';
import { IErrorCausesState } from './modules/errorCausesModule';
import { IMachineRecordState } from './modules/machineRecordsModule';

export interface IStore {
    router: RouterState,
    machine: IMachineState,
    errorCause: IErrorCausesState,
    machineRecords: IMachineRecordState,
}
