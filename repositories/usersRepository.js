const db = require('../db');
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');

const doFindMany = async condition => {
   const data = await db.users.find(condition).toArray()
   return data
};

module.exports = {
    async create (data) {
        const email = data.email;
        const username = data.username;
        const password = data.password;
        const typeIndicator = data.typeIndicator;
        const user = await db.users.findOne({email: email})
        if (!user) {
            try {
                const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
                const { ops: [newOne] } = await db.users.insertOne(
                    {
                        username: username,
                        email: email, 
                        password: hashedPassword,
                        typeIndicator: typeIndicator
                    });
                return newOne;
            } catch (err) {
                return err;
            }
        }
    },
    async findById (id) {
        const result = await db.users.findOne({_id: ObjectId(id)});
        return result;
    },
}