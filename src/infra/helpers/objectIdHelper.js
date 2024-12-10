const { ObjectId } = require('mongodb')

exports.toObjectId = (string) => {
    return ObjectId.createFromHexString(string)
}