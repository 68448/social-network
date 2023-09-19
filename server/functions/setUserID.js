import { MongoClient } from 'mongodb'

const MONGODBCLIENT = new MongoClient('mongodb://localhost:27017/')

export default async function setUserID() {
  try {
    await MONGODBCLIENT.connect()
    const document = await MONGODBCLIENT.db('users')
      .collection('users')
      .find()
      .toArray()
    await MONGODBCLIENT.close()
    return document.length + 1
  } catch (e) {
    console.log(e)
    return 0
  }
}
