const express = require("express")
const app = express()

const PORT = 3004

// Middlewares
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})