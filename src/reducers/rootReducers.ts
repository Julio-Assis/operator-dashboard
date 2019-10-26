import { combineReducers, Reducer, AnyAction } from 'redux';
import { routerReducer } from 'react-router-redux';
import { IStore } from './IStore';
import { machinesReducer } from './modules/machinesModule';
import { errorCausesReducer } from './modules/errorCausesModule';
import { machineRecordsReducer } from './modules/machineRecordsModule';

export const rootReducer = combineReducers<IStore>({
    router: routerReducer,
    machine: machinesReducer,
    errorCause: errorCausesReducer,
    machineRecords: machineRecordsReducer,
});
