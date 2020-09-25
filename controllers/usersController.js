const usersRepository = require('../repositories/usersRepository');
const httpResponseFormatter = require('../formatters/httpResponseFormatter');

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
    }
}