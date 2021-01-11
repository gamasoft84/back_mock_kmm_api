const { Router } = require('express');
const router = Router();

const { RequestPOVINdata, SubmitCustomerInformation } = require('../controllers/mock.controller');

router.route('/RequestPOVINdata')
    .get(RequestPOVINdata);

router.route('/SubmitCustomerInformation')
    .get(SubmitCustomerInformation);


module.exports = router;
