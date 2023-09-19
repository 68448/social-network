import { MongoClient } from 'mongodb'

const MONGODBCLIENT = new MongoClient('mongodb://localhost:27017/')

export default async function setUserPost(params) {
  try {
    await MONGODBCLIENT.connect()
    const collectionArray = await MONGODBCLIENT.db('users').collection('users')
    const userData = await collectionArray.findOne({ _id: params._id })
    if (userData) {
      await collectionArray.updateOne({ _id: params._id }, {})
      const returnData = await collectionArray.findOne({ _id: params._id })
      await MONGODBCLIENT.close()
      return returnData
    } else {
      await MONGODBCLIENT.close()
      return false
    }
  } catch (e) {
    console.log(e)
    return false
  }
}
