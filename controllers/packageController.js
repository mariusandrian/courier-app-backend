const packageRepository = require('../repositories/packageRepository');
const httpResponseFormatter = require('../formatters/httpResponseFormatter');

module.exports = {
    async getCustomerSubmittedPackages(req, res) {
        try {
            const data = 1;
            httpResponseFormatter.formatOkResponse(res, data )
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            })
        }
    },
    async getAllSubmittedPackages(req, res) {
        try {
            const data = 1;
            httpResponseFormatter.formatOkResponse(res, data)
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            })
        }
    },
    async getAllInProgressPackages(req, res) {
        try {
            const data = 1;
            httpResponseFormatter.formatOkResponse(res, data)
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            })
        }
    },
    async getAllDonePackages(req, res) {
        try {
            const data = 1;
            httpResponseFormatter.formatOkResponse(res, data)
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            })
        }
    },
    async getAllPackages(req, res) {
        try {
            const result = await packageRepository.getAll();
            httpResponseFormatter.formatOkResponse(res, result)
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            })
        }
    },
    async submitRequest(req, res) {
        try {
            const result = await packageRepository.createOne(req.body);
            httpResponseFormatter.formatOkResponse(res, result)
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            })
        }
    },
    async assignPackage(req, res) {
        try {
            const couriers = await couriersRepository.getAll();
            httpResponseFormatter.formatOkResponse(res, couriers);

        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            });
        }
    },
    async updatePackageStatus(req, res) {
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