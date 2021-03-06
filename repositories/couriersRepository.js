const db = require('../db');

const doFindMany = async condition => {
    const data = await db.couriers.find(condition).toArray()
    return data
 };

 module.exports = { 
     getAll () {
         return doFindMany({});
     },
     async createOne (data) {
         const {ops: [newOne]} = await db.couriers.insertOne(data);
         return newOne;
     }
 }