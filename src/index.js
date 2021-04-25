const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const users = [
    {
        name: 'ahmed',
        age: '2'
    },
    {
        name: 'anis',
        age: '3'
    },

]

app.get('/hello', (req, res) => {
    return res.json({ message: 'hello node JS' })
})
app.get('/users', (req, res) => {
    return res.json(users)
})
app.post('/user', (req, res) => {
    const user = req.body
    users.push(user)
    return res.json(user)
})
app.listen(3000, () => {
    console.log('server start listening at port 3000');
})