const registerInLog = require("../helpers/logHelper");
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
        registerInLog(resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
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
        registerInLog(resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
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
        registerInLog(resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
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
        registerInLog(resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
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
        registerInLog(resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
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
        registerInLog(resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
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
        registerInLog(resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
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
        registerInLog(resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
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
        registerInLog(resp.messageId, resp.transactionId, req.body, resp, resp.resultCode);
        res.json(resp);
    }
    catch (err) {
        resp.resultCode = 'GCOREFA';
        res.status(400).json({
            resp
        });
    }
};




module.exports = mockCtrl;