const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('build'))

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
})

const REACT_APP_PORT = process.env.REACT_APP_PORT || 3000

app.listen(REACT_APP_PORT, () => console.log('\x1b[32m%s\x1b[0m', `[App] running http:localhost:${REACT_APP_PORT}`))
