import cors from "cors";
import express from "express";
import path from "path";

const app = express();
import { HttpClient } from "./httpClient";
const port = 8080; // default port to listen

// Configure Express to use EJS
app.use(cors());
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.get("/records*", async (req, res) => {
    console.log("blah");
    const httpClient = new HttpClient();
    const data = await httpClient.get(`http://172.16.25.14:8000${req.path}`);
    console.log(data);
    res.send(data);
});

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.send("up and running!");
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
