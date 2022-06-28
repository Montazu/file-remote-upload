import cors from "cors"
import express from "express"
import * as https from "https"
import config from "./config/default.json" assert { type: "json" }
import router from "./routes"

const {app: { port, origin }} = config
const app = express()

https.globalAgent.options.rejectUnauthorized = false

app.use(cors({ origin }))
app.use(express.json())
app.use(router)

app.listen(port, console.log(`Server runing on port ${port}`))
