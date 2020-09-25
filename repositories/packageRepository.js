const db = require('../db');
const { ObjectId } = require('mongodb');

const doFindMany = async condition => {
    const data = await db.packages.find(condition).toArray()
    return data
 };

 module.exports = { 
     getAll () {
         return doFindMany({});
     },
     async createOne (data) {
         const {ops: [newOne]} = await db.packages.insertOne(data);
         return newOne;
     },
     getPackageByCustomerId (customerId) {
        return doFindMany({requesterId: Id})
     },
     async updateStatus (packageId, newStatus) {
         const result = await db.packages.findOneAndUpdate(
             { _id: ObjectId(packageId)},
             { $set: {status: newStatus }}
         )
         return result;
     }
 }