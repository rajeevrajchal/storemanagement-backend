import dotenv from "dotenv"

dotenv.config()
import http from "http"
import connectDB from "./db"

import app from "../index"
import ErrorHandler from "../helpers/error";

const port = process.env.PORT || 8000

app.set('port', port)
const server = http.createServer(app);

connectDB().then(
    () => {
        server.listen(port, () => {
            console.log(`The server is running at http://localhost:${port}`);
        });
    }
).catch(error => {
    throw new ErrorHandler(500, "Connection Failed")
});

