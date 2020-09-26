const db = require('../db');
const { ObjectId } = require('mongodb');
const { getByPackageId } = require('../controllers/packageController');

const doFindMany = async condition => {
    const data = await db.packages.find(condition).toArray()
    return data
 };

 module.exports = { 
     getAll () {
         return doFindMany({});
     },
     async getAllSubmitted () {
         return doFindMany({status: "Processing"});
     },
     async getAllInProgress() {
        return doFindMany({status: "In Progress"});
    },
    async getAllDone () {
        return doFindMany({status: "Delivered"});
    },
    async getByPackageId(packageId) {
        console.log(packageId)
        const data = await db.packages.findOne({_id: ObjectId(packageId)});
        return data
    },
     async createOne (data) {
         const {ops: [newOne]} = await db.packages.insertOne(data);
         return newOne;
     },
     getPackageByCustomerId (customerId) {
        return doFindMany({requesterId: customerId})
     },
     async assignToCourier (packageId, payload) {
        const result = await db.packages.findOneAndUpdate(
            { _id: ObjectId(packageId)},
            { $set: { 
                courierId: payload.courierId,
                courierName: payload.courierName,
                status: payload.status
             }}
        )
        return result;
     },
     async updateStatus (packageId, newStatus) {
         const result = await db.packages.findOneAndUpdate(
             { _id: ObjectId(packageId)},
             { $set: { status: newStatus }}
         )
         return result;
     },
 }