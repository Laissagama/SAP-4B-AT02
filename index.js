const express = require('express')
const api = express()
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
api.get('/', (req, res) => {
  res.json(ListaDeAlunos)
})

api.post('/', (req, res) => {
  var ListaDeAlunos = {
    Nome: req.body.Nome,
    Matricula: req.body.Matricula
  }
  ListaDeAlunos.push(ListaDeAlunos)
  res.json({ menssagem: "Estudante adicionado"})
})

api.listen(3000)