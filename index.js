const express = require('express')
const app = express()
const port = 3000
var ListaDeAlunos = [
{
Nome: "Laissa", 
Matricula: 321,
},
{
Nome: "Antonio", 
Matricula: 123,
},
{
Nome: "Vinicius", 
Matricula: 567,
},
{
Nome: "Amanda", 
Matricula: 891,
},
{
Nome: "Samanta", 
Matricula: 761,
 }

]
app.get('/', (req, res) => {
  res.send(ListaDeAlunos)
})

app.listen(3000)