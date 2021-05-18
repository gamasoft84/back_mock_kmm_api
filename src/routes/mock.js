const { Router } = require('express');
const router = Router();

const { RequestPOVINdata, SubmitCustomerInformation, SubmitCheckinLeadData, SubmitTestDriveFeedback, 
    SubmitPOVINdata, SubmitVehicleDetailData, SubmitStaffData, SubmitInvoiceVINdata, SubmitLeadData, tokenMC,
    dataextensionsLead, dataextensionsVehicle } = require('../controllers/mock.controller');

/*

path: 
/api/gateway/

*/

router.route('/RequestPOVINdata')
    .post(RequestPOVINdata);

router.route('/SubmitCustomerInformation')
    .post(SubmitCustomerInformation);

router.route('/SubmitLeadData')
    .post(SubmitLeadData);

router.route('/SubmitCheckinLeadData')
    .post(SubmitCheckinLeadData);

router.route('/SubmitTestDriveFeedback')
    .post(SubmitTestDriveFeedback);

router.route('/SubmitPOVINdata')
    .post(SubmitPOVINdata);

router.route('/SubmitInvoiceVINdata')
    .post(SubmitInvoiceVINdata);

router.route('/SubmitVehicleDetailData')
    .post(SubmitVehicleDetailData);

router.route('/SubmitStaffData')
    .post(SubmitStaffData);

router.route('/tokenMC')
    .post(tokenMC);



//dataextensions
router.route('/dataextensions/lead')
    .put(dataextensionsLead);
router.route('/dataextensions/vehicle')
    .put(dataextensionsVehicle);



module.exports = router;
