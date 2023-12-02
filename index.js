const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))


app.get('/', (request, response) => {
    response.send('<h2>Bonjour</h2>')
})

const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(` Server running on PORT ${PORT} `)
})