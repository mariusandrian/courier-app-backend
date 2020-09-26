const usersRepository = require('../repositories/usersRepository');
const httpResponseFormatter = require('../formatters/httpResponseFormatter');
const bcrypt = require('bcrypt');

module.exports = {
    async signup(req, res) {
        try {
            console.log('signing up');
            const isEmailExist = await usersRepository.checkEmailExist(req.body.email);
            const isUsernameExist = await usersRepository.checkUsernameExist(req.body.username);
            if (isEmailExist) {
                console.log('email doesnt exist');
                httpResponseFormatter.formatOkResponse(res, {
                    err: "Email already exists"
                })
            } 
            if (isUsernameExist) {
                httpResponseFormatter.formatOkResponse(res, {
                    err: "Username already exists"
                })
            } else {
                const result = await usersRepository.create(req.body);
                httpResponseFormatter.formatOkResponse(res, result);
            }
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            });
        }
    },
    async login(req, res) {
        try {
            const user = await usersRepository.getOneByEmail(req.body.email);
            if (bcrypt.compareSync(req.body.password, user.password)) {
                httpResponseFormatter.formatOkResponse(res, user);
            } else {
                httpResponseFormatter.formatOkResponse(res, {
                    err: "password is wrong"
                });
            }
        } catch (err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err.message
            });
        }
    },
}