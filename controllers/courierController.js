const couriersRepository = require('../repositories/couriersRepository');
const httpResponseFormatter = require('../formatters/httpResponseFormatter');

module.exports = {
    async getAllCouriers(req, res) {
        try {
            const couriers = await couriersRepository.getAll();
            httpResponseFormatter.formatOkResponse(res, couriers);

        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            });
        }
    },
    async createCourier(req, res) {
        try {
            const result = await couriersRepository.createOne(req.body);
            httpResponseFormatter.formatOkResponse(res, result);
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            });
        }
    }
}