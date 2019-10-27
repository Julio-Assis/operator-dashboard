import { put, call } from 'redux-saga/effects';
import { HttpClient } from '../services/httpClient';
import {
    getMachinesSuccess,
    getMachinesError,
    IMachine,
} from '../reducers/modules/machinesModule';


export function* getMachines() {
    const httpClient = new HttpClient();
    const response = yield call(httpClient.get,'http://localhost:8080/records/list-machines/');
    if (response) {
        const machines: IMachine[] = JSON.parse(response.toString());
        yield put(getMachinesSuccess(machines));
    } else {
        yield put(getMachinesError(response));
    }
}