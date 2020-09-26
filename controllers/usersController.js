const usersRepository = require('../repositories/usersRepository');
const httpResponseFormatter = require('../formatters/httpResponseFormatter');
const bcrypt = require('bcrypt');

module.exports = {
    async signup(req, res) {
        try {
            const result = await usersRepository.create(req.body);
            httpResponseFormatter.formatOkResponse(res, result)
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