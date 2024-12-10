const { MongoClient } = require('mongodb')

const { MONGO_CONNECTON_STRNG } = process.env

const client = new MongoClient(MONGO_CONNECTON_STRNG)

let connection = null

exports.connectionAndGetCollection = async (collectionName) => {
    if (connection) {
        return connection.db().collection(collectionName)
    }
    
    connection = await client.connect()
    
    return connection.db().collection(collectionName)
}