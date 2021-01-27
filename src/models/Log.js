const { Schema, model } = require('mongoose');

const logSchema = new Schema(
    {
        api: String,
        messageId: String,
        transactionId: String,
        req: String,
        resp: String,
        resultCode: String,
    }, {
        timestamps: true
    });

module.exports = model('Log', logSchema);