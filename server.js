const handlebars = require('express-handlebars')

const express = require('express')
let app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


const usuarios = [

]

app.get('/', (req, res) => {
    res.json(usuarios)
})

app.get('/usuarios', (req, res) => {
    res.render('usuarios')    
    console.log(req.body)
})

app.post('/usuarios', (req, res) => {
    usuarios.push(req.body)
    res.json({status: 'Usuario criado com sucesso'})
})

app.delete('/usuarios', (req, res) => {
    usuarios.pop(req.body)
    res.json({status: 'Usuario deletado com sucesso'})
})

app.listen(8000, () => {
    console.log('Aplicação rodando em http://localhost:8000')
} )