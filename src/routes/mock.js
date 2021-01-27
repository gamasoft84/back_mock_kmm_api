const { Router } = require('express');
const router = Router();

const { RequestPOVINdata, SubmitCustomerInformation } = require('../controllers/mock.controller');

/*

path: 
/api/gateway/

*/

router.route('/RequestPOVINdata')
    .post(RequestPOVINdata);

router.route('/SubmitCustomerInformation')
    .post(SubmitCustomerInformation);


module.exports = router;
