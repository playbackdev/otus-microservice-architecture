const express = require('express')
const promBundle = require("express-prom-bundle");

require('dotenv').config()
const app = express()
const port = process.env.NODE_API_PORT || 4000

app.use(express.json())

const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  includeStatusCode: true,
  includeUp: true,
  promClient: {
    collectDefaultMetrics: {}
  }
});

app.use(metricsMiddleware)

app.use('/', require('./routes/index.js'))
app.use('/user/', require('./routes/user.js'))

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})