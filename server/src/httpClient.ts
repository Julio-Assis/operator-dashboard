import * as request from "request";

export class HttpClient {

    public get = (url: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            request
                .get(url)
                .on("data", (data) => {
                    resolve(JSON.parse(data.toString()));
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    public post = (url: string, body: object): Promise<any> => {
        return new Promise((resolve, reject) => {
            request
                .post({url, formData: body})
                .on("data", (data) => {
                    resolve(data.toString());
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }
}
