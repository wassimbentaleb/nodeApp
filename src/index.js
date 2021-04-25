const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    return res.json({ message: 'hello node JS' })
})
app.get('/bonjour', (req, res) => {
    return res.json({ message: 'bonjour node JS' })
})

app.listen(3000, () => {
    console.log('server start listening at port 3000');
})