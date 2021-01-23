import express from 'express'
import route from './routes'
import cors from "cors"

const app = express();

app.use(express.static(__dirname + '/build/server.js'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())
app.use(route)

export default app;
