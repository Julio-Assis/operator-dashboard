"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const httpClient_1 = require("./httpClient");
const port = 8080; // default port to listen
// Configure Express to use EJS
app.use(cors_1.default());
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/records*", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const httpClient = new httpClient_1.HttpClient();
    const data = yield httpClient.get(`http://172.16.25.14:8000${req.path}`);
    res.send(data);
}));
// define a route handler for the default home page
app.get("/", (req, res) => {
    // render the index template
    res.send("up and running!");
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map