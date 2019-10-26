import * as request from 'request';

export class HttpClient {

    public get = (url: string): Promise<request.Response> => {
        return new Promise((resolve, reject) => {
            request
                .get(url)
                .on('response', function(response) {
                    resolve(response);
                })
                .on('error', function(err) {
                    reject(err);
                })
        });
    }

    public post = (url: string, body: object): Promise<request.Response> => {
        return new Promise((resolve, reject) => {
            request
                .post({url, formData: body})
                .on('response', function(response) {
                    resolve(response);
                })
                .on('error', function(err) {
                    reject(err);
                })
        });
    }
}
