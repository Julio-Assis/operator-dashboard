import { put } from 'redux-saga/effects';
import { HttpClient } from '../services/httpClient';
import {
    IErrorCause,
    getErrorCausesSuccess,
    getErrorCausesError,
} from '../reducers/modules/errorCausesModule';


export async function* getErrorCauses() {
    const httpClient = new HttpClient();
    const response = await httpClient.get('http://172.16.25.14:8000/records/causes/');
    if (response.statusCode === 200) {
        console.log('checking');
        console.log(response);
        console.log(response.toJSON());
        const errors: IErrorCause[] = response.toJSON() as any as IErrorCause[];
        yield put(getErrorCausesSuccess(errors));
    } else {
        yield put(getErrorCausesError(response.body));
    }
}
