import { put, call } from 'redux-saga/effects';
import { HttpClient } from '../services/httpClient';
import {
    getMachineRecordsSuccess,
    getMachineRecordsError,
    IMachineRecord,
} from '../reducers/modules/machineRecordsModule';


export function* getMachineRecords() {
    const httpClient = new HttpClient();
    const response = yield call(httpClient.get, 'http://localhost:8080/records/machines/');
    if (response) {
        const machines: IMachineRecord[] = JSON.parse(response.toString());
        yield put(getMachineRecordsSuccess(machines));
    } else {
        yield put(getMachineRecordsError(response));
    }
}
