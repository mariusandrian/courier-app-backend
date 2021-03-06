const packageRepository = require('../repositories/packageRepository');
const httpResponseFormatter = require('../formatters/httpResponseFormatter');

module.exports = {
    async getCustomerSubmittedPackages(req, res) {
        try {
            const result = await packageRepository.getPackageByCustomerId(req.params.id);
            httpResponseFormatter.formatOkResponse(res, result)
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            })
        }
    },
    async getAllSubmittedPackages(req, res) {
        try {
            const result = await packageRepository.getAllSubmitted();
            httpResponseFormatter.formatOkResponse(res, result);
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            })
        }
    },
    async getAllInProgressPackages(req, res) {
        try {
            const result = await packageRepository.getAllInProgress();
            httpResponseFormatter.formatOkResponse(res, result);
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            })
        }
    },
    async getAllDonePackages(req, res) {
        try {
            const result = await packageRepository.getAllDone();
            httpResponseFormatter.formatOkResponse(res, result);
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            })
        }
    },
    async getByPackageId(req, res) {
        try {
            const result = await packageRepository.getByPackageId(req.params.id);
            httpResponseFormatter.formatOkResponse(res, result);
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
            const result = await packageRepository.assignToCourier(req.params.id, req.body);
            httpResponseFormatter.formatOkResponse(res, result);
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            });
        }
    },
    async updatePackageStatus(req, res) {
        try {
            const result = await packageRepository.updateStatus(req.params.id, req.body.status);
            httpResponseFormatter.formatOkResponse(res, result);
        } catch(err) {
            httpResponseFormatter.formatOkResponse(res, {
                err: err
            });
        }
    }

}