const packageController = require('../controllers/packageController');
const courierController = require('../controllers/courierController');
const usersController = require('../controllers/usersController');

module.exports = app => {
    // app.get('/package/submit/:id', packageController.getCustomerSubmittedPackages);
    // app.get('/package/new', packageController.getAllSubmittedPackages);
    // app.get('/package/ip', packageController.getAllInProgressPackages);
    // app.get('/package/done', packageController.getAllDonePackages);
    app.get('/package', packageController.getAllPackages);
    app.post('/package', packageController.submitRequest);
    // app.put('/package/assign/:id', packageController.assignPackage);
    // app.put('/package/status/:id', packageController.updatePackageStatus);

    app.get('/courier', courierController.getAllCouriers);
    app.post('/courier', courierController.createCourier);

    // app.post('/signup', usersController.signup);
    // app.get('/login', usersController.login);
    // app.get('/logout', usersController.logout);
}