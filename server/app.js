const dotenv = require('dotenv')
const express = require('express')
const app = express()

dotenv.config({ path: './config.env' })
require('./database/Connection')
const PORT = process.env.PORT

app.use(express.json())
app.use(require('./router/router'))

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})