import { put, call } from 'redux-saga/effects';
import { HttpClient } from '../services/httpClient';
import {
    getMachinesSuccess,
    getMachinesError,
    IMachine,
} from '../reducers/modules/machinesModule';


export async function* getMachines() {
    const httpClient = new HttpClient();
    const response = await httpClient.get('http://172.16.25.14:8000/records/list-machines/');
    if (response.statusCode === 200) {
        console.log('checking');
        console.log(response);
        console.log(response.toJSON());
        const machines: IMachine[] = response.toJSON() as any as IMachine[];
        yield put(getMachinesSuccess(machines));
    } else {
        yield put(getMachinesError(response.body));
    }
}