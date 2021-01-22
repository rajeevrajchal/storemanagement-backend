import express from 'express';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });
import route from './routes'
const app = express();

app.use(express.static(__dirname+'/build/server.js'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const {
    PORT = 8000,
} = process.env;
app.use(route)
if (require.main === module) { // true if file is executed
    app.listen(PORT, () => {
        console.log('server started at http://localhost:'+PORT);
    });
}

export default app;