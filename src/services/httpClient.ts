import * as request from 'request';

export class HttpClient {

    public get = (url: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            request
                .get(url, {
                    headers: {
                        "Access-Control-Allow-Origin": 'http://172.16.25.14:8080',
                    }
                })
                .on('data', function(response) {
                    resolve(response);
                })
                .on('error', function(err) {
                    console.log('checking error');
                    console.log(err);
                    reject(err);
                })
        });
    }

    public post = (url: string, body: object): Promise<any> => {
        return new Promise((resolve, reject) => {
            request
                .post({url, formData: body})
                .on('data', function(response) {
                    resolve(response);
                })
                .on('error', function(err) {
                    reject(err);
                })
        });
    }
}
