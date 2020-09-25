const { MongoClient } = require('mongodb');

const DB_NAME = process.env.DB_NAME || 'courier-app';
const COLLECTIONS = {
    USERS: 'users',
    PACKAGES: 'packages',
    COURIERS: 'couriers'
};
const MONGO_URL = process.env.MONGO_URI || 'mongodb://localhost:27017';

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });

const userSchema = require('./userSchema');
const packageSchema = require('./packageSchema');
const courierSchema = require('./courierSchema');

module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to Mongo');
        const db = connection.db(DB_NAME);
        try {
            await db.createCollection(COLLECTIONS.USERS, userSchema);
            await db.createCollection(COLLECTIONS.PACKAGES, packageSchema);
            await db.createCollection(COLLECTIONS.COURIERS, courierSchema);
        } catch (err) {
        }
        
        this.users = db.collection(COLLECTIONS.USERS);
        this.packages = db.collection(COLLECTIONS.PACKAGES);
        this.couriers = db.collection(COLLECTIONS.COURIERS);
    },
    disconnect () {
        return client.close();
    },
};
