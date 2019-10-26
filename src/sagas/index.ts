import { all, takeLatest } from 'redux-saga/effects';
import { getMachines } from './machineSaga';
import { getMachineRecords } from './machineRecordsSaga';
import { getErrorCauses } from './errorCauseSaga';

import { MachinesTypes } from '../reducers/modules/machinesModule';
import { MachineRecordsTypes } from '../reducers/modules/machineRecordsModule';
import { ErrorCausesTypes } from '../reducers/modules/errorCausesModule';

export default function* rootSaga() {
    yield all([
        takeLatest(MachinesTypes.GET_MACHINES_REQUEST, getMachines),
        takeLatest(MachineRecordsTypes.GET_MACHINE_RECORDS_REQUEST, getMachineRecords),
        takeLatest(ErrorCausesTypes.GET_ERROR_CAUSES_REQUEST, getErrorCauses),
    ])
}
