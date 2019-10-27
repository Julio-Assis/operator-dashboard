import { put, call } from 'redux-saga/effects';
import { HttpClient } from '../services/httpClient';
import {
    IErrorCause,
    getErrorCausesSuccess,
    getErrorCausesError,
} from '../reducers/modules/errorCausesModule';


export function* getErrorCauses() {
    const httpClient = new HttpClient();
    const response = yield call(httpClient.get,'http://localhost:8080/records/causes');
    console.log('seeing response');
    console.log(response.toString());
    if (response) {
        const errors: IErrorCause[] = JSON.parse(response.toString());
        yield put(getErrorCausesSuccess(errors));
    } else {
        yield put(getErrorCausesError(response));
    }
}
