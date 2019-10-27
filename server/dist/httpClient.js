"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __importStar(require("request"));
class HttpClient {
    constructor() {
        this.get = (url) => {
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
        };
        this.post = (url, body) => {
            return new Promise((resolve, reject) => {
                request
                    .post({ url, formData: body })
                    .on("data", (data) => {
                    resolve(data.toString());
                })
                    .on("error", (err) => {
                    reject(err);
                });
            });
        };
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=httpClient.js.map