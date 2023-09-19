import { MongoClient } from 'mongodb'

const MONGODBCLIENT = new MongoClient('mongodb://localhost:27017/')

export default async function getUserInfo(params) {
  try {
    await MONGODBCLIENT.connect()
    const collectionArray = await MONGODBCLIENT.db('users')
      .collection('users')
      .findOne(params)
    await MONGODBCLIENT.close()
    if (collectionArray) {
      return collectionArray
    } else {
      return false
    }
  } catch (e) {
    console.log(e)
    return false
  }
}
