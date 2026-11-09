"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.razorpayURL = exports.generateRazorpayAuthHeader = void 0;
const generateRazorpayAuthHeader = (credentials) => {
    const { keyID, keySecret } = credentials;
    const encodedCredentials = Buffer.from(`${keyID}:${keySecret}`).toString('base64');
    return Promise.resolve({
        Authorization: `Basic ${encodedCredentials}`,
    });
};
exports.generateRazorpayAuthHeader = generateRazorpayAuthHeader;
exports.razorpayURL = {
    apiURL: 'https://api.razorpay.com/v1/'
};
//# sourceMappingURL=utils.js.map