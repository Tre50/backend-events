import { onRequest } from 'firebase-functions/v2/https'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'


const app = express()
app.use(cors())
app.use(express.json())

app.get("/test", (res, req) => res.send ("it is working"))

app.get()
app.post()

export const api = onRequest(app)