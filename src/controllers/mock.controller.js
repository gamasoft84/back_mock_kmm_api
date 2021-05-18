const fetchSinToken = require("../helpers/fetch");
const registerInLog = require("../helpers/logHelper");
const Log = require("../models/Log");
const mockCtrl = {};

/*

path: 
/api/gateway/RequestPOVINdata

*/

mockCtrl.RequestPOVINdata= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'REQUEST_PO_VIN_DATA_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: '',
            errorDescription : ''
        }

        console.log('RequestPOVINdata');
        resp.resultCode = 'GCORESU';
        //log
        registerInLog('RequestPOVINdata',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};


mockCtrl.SubmitCustomerInformation= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'CUSTOMER_INFORMATION_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: '',
            errorDescription : ''
        }

        console.log('SubmitCustomerInformation');
        resp.resultCode = 'GCORESU';
        //log
        registerInLog('SubmitCustomerInformation',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};


mockCtrl.SubmitLeadData= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'ONLINE_LEAD_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: '',
            errorDescription : ''
        }

        console.log('SubmitLeadData');
        resp.resultCode = 'GCORESU';
        //log
        registerInLog('SubmitLeadData',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};


mockCtrl.SubmitCheckinLeadData= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'CHECKIN_LEAD_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: '',
            errorDescription : ''
        }

        console.log('SubmitCheckinLeadData');
        resp.resultCode = 'GCORESU';
        //log
        registerInLog('SubmitCheckinLeadData',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};

mockCtrl.SubmitTestDriveFeedback= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'TESTDRIVE_FEEDBACK_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: '',
            errorDescription : ''
        }

        console.log('SubmitTestDriveFeedback');
        resp.resultCode = 'GCORESU';
        //log
        registerInLog('SubmitTestDriveFeedback',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};

mockCtrl.SubmitPOVINdata= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'PO_VIN_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: '',
            errorDescription : ''
        }

        console.log('SubmitPOVINdata');
        resp.resultCode = 'GCORESU';
        //log
        registerInLog('SubmitPOVINdata',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};

mockCtrl.SubmitInvoiceVINdata= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'INVOICE_VIN_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: '',
            errorDescription : ''
        }

        console.log('SubmitInvoiceVINdata');
        resp.resultCode = 'GCORESU';
        //log
        registerInLog('SubmitInvoiceVINdata',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};

mockCtrl.SubmitVehicleDetailData= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'VEHICLE_DETAIL_' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: '',
            errorDescription : ''
        }

        console.log('SubmitVehicleDetailData');
        resp.resultCode = 'GCORESU';
        //log
        registerInLog('SubmitVehicleDetailData',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};


mockCtrl.SubmitStaffData= async (req, res) => {
    try {
        const {messageId, transactionId } = req.body;
        let resp ={};
        
        resp.messageId = messageId ? messageId : 'KMM_' + new Date().getTime() + '';
        resp.transactionId = transactionId ? transactionId: 'STAFF_DATA' + new Date().getTime() + '';
        resp.errorManagement = {
            errorCode: '',
            errorDescription : ''
        }

        console.log('SubmitStaffData');
        resp.resultCode = 'GCORESU';
        //log
        registerInLog('SubmitStaffData',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};

mockCtrl.tokenMC= async (req, res) => {
    let resp ={};
    try {
        console.log('req.body',req.body);
        const {grant_type, client_id, client_secret } = req.body;
        
        resp.grant_type = grant_type ? grant_type : 'No value';
        resp.client_id = client_id ? client_id : 'No value';
        resp.client_secret = client_secret ? client_secret : 'No value';
        console.log('objBody', resp);

        let respMC = await fetchSinToken('token',resp,'POST');
        const data = await respMC.json();
        data.grant_type = grant_type ? grant_type : 'No value';
        data.client_id = client_id ? client_id : 'No value';
        data.client_secret = client_secret ? client_secret : 'No value';
        //log
        registerInLog('tokenMC',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(data);
    }
    catch (err) {
        console.log(err)
        resp.resultCode = 'Fail';
        res.status(400).json({
            resp
        });
    }
};




mockCtrl.dataextensionsLead= async (req, res) => {
    let resp ={};
    try {
        console.log('req.body',req.body);
        const {grant_type, client_id, client_secret } = req.body;
        
        resp.grant_type = grant_type ? grant_type : 'No value';
        resp.client_id = client_id ? client_id : 'No value';
        resp.client_secret = client_secret ? client_secret : 'No value';
        resp.requestId ="acf8897-fdaereh6-gfsgsrt4897"
        console.log('objBody', resp);
        //log
        registerInLog('dataextensionsLead',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        console.log(err)
        resp.resultCode = 'Fail';
        res.status(400).json({
            resp
        });
    }
};

mockCtrl.dataextensionsVehicle= async (req, res) => {
    let resp ={};
    try {
        console.log('req.body',req.body);
        const {grant_type, client_id, client_secret } = req.body;
        
        resp.grant_type = grant_type ? grant_type : 'No value';
        resp.client_id = client_id ? client_id : 'No value';
        resp.client_secret = client_secret ? client_secret : 'No value';
        resp.requestId ="acf8897-fdaereh6-gfsgsrt4897"
        console.log('objBody', resp);
        //log
        registerInLog('dataextensionsVehicle',resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        console.log(err)
        resp.resultCode = 'Fail';
        res.status(400).json({
            resp
        });
    }
};



module.exports = mockCtrl;