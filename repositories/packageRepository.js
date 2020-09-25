const db = require('../db');

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
     }
 }