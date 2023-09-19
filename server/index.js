import express from 'express'
import { MongoClient } from 'mongodb'

//Функции
import registerUser from './requests/registerUser.js' //Добавление нового пользователя в БД
import checkUser from './requests/checkUser.js' //Проверка пользователя в БД
import setUserID from './functions/setUserID.js' //Получение уникального id
import getUserInfo from './requests/getUserInfo.js' //Получение всей информации о пользователе
import setUserPost from './requests/setUserPost.js'

const app = express()
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/registration', async function (req, res) {
  const user = {
    _id: await setUserID(),
    login: 'twimar234',
    name: 'Nikita',
    email: 'twimar2@gmail.com',
    pass: 'admin:root',
  }
  const result = await registerUser(user)
  res.send(result)
})

app.get('/checkUser', async function (req, res) {
  const login = req.query.login
  const pass = req.query.pass
  const result = await checkUser({ login: login, pass: pass })
  res.send(result)
})

app.get('/getUserInfo', async function (req, res) {
  const id = Number(req.query.id)
  const result = await getUserInfo({ _id: id })
  res.send(result)
})

app.get('/setUserPost', async function (req, res) {
  const id = Number(req.query.id)
  const post = req.query.post
  const result = await setUserPost({ _id: id, post: post })
  res.send(result)
})

app.get('/updateUserInfo', async function (req, res) {
  const id = Number(req.query.id)
  const userData = req.query.data
  console.log(id, userData)
  //const result = await updateUserData({ _id: id, data: userData })
  res.send('ok')
})

app.listen(4000)
