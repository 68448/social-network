import { MongoClient } from 'mongodb'

const MONGODBCLIENT = new MongoClient('mongodb://localhost:27017/')

export default async function checkUser(userData) {
  try {
    await MONGODBCLIENT.connect()
    const collectionArray = await MONGODBCLIENT.db('users')
      .collection('users')
      .findOne(userData)
    await MONGODBCLIENT.close()
    if (collectionArray) {
      return { answer: true, id: collectionArray._id }
    } else {
      return { answer: false }
    }
  } catch (e) {
    console.log(e)
    return { answer: false }
  }
}
