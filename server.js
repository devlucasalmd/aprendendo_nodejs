const express = require('express')

let app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/cadastro', (req, res) => {
    res.send('Tela de cadastro')
})

app.get('/perfil', (req, res) => {
    res.send('Perfil de usuario')
})

app.listen(8000, () => {
    console.log('Aplicação rodando em http://localhost:8000')
} )