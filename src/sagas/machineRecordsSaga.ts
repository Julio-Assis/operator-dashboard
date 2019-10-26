import { put, call } from 'redux-saga/effects';
import { HttpClient } from '../services/httpClient';
import {
    getMachineRecordsSuccess,
    getMachineRecordsError,
    IMachineRecord,
} from '../reducers/modules/machineRecordsModule';


export async function* getMachineRecords() {
    const httpClient = new HttpClient();
    const response = await httpClient.get('http://172.16.25.14:8000/records/machines/');
    if (response.statusCode === 200) {
        console.log('checking');
        console.log(response);
        console.log(response.toJSON());
        const machines: IMachineRecord[] = response.toJSON() as any as IMachineRecord[];
        yield put(getMachineRecordsSuccess(machines));
    } else {
        yield put(getMachineRecordsError(response.body));
    }
}
