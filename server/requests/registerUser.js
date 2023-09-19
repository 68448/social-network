import { MongoClient } from 'mongodb'

const MONGODBCLIENT = new MongoClient('mongodb://localhost:27017/')

export default async function registerUser(userData) {
  if (!userData) return { answer: false, text: 'Ошибка в валидации данных' }
  const userLogin = userData.login

  try {
    await MONGODBCLIENT.connect()
    const document = await MONGODBCLIENT.db('users').collection('users')
    const checkOldUsers = await document.findOne({ login: userLogin })
    console.log(checkOldUsers)
    if (!checkOldUsers) {
      await document.insertOne(userData)
      await MONGODBCLIENT.close()
      return { answer: true, text: 'Пользователь успешно добавлен' }
    }
    return { answer: false, text: 'Пользователь уже существует' }
  } catch (e) {
    console.log(e)
    return { answer: false, text: 'Ошибка подключения к бд' }
  }
}
