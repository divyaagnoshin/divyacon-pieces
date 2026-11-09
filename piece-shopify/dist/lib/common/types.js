"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyFulfillmentEventStatuses = exports.ShopifyFulfillmentStatuses = exports.ShopifyTransactionKinds = exports.ShopifyOrderFinancialStatuses = exports.ShopifyProductStatuses = void 0;
var ShopifyProductStatuses;
(function (ShopifyProductStatuses) {
    ShopifyProductStatuses["ACTIVE"] = "active";
    ShopifyProductStatuses["ARCHIVED"] = "archived";
    ShopifyProductStatuses["DRAFT"] = "draft";
})(ShopifyProductStatuses || (exports.ShopifyProductStatuses = ShopifyProductStatuses = {}));
var ShopifyOrderFinancialStatuses;
(function (ShopifyOrderFinancialStatuses) {
    ShopifyOrderFinancialStatuses["PENDING"] = "pending";
    ShopifyOrderFinancialStatuses["PARTIALLY_PAID"] = "partially_pad";
})(ShopifyOrderFinancialStatuses || (exports.ShopifyOrderFinancialStatuses = ShopifyOrderFinancialStatuses = {}));
var ShopifyTransactionKinds;
(function (ShopifyTransactionKinds) {
    ShopifyTransactionKinds["AUTHORIZATION"] = "authorization";
    ShopifyTransactionKinds["SALE"] = "sale";
    ShopifyTransactionKinds["CAPTURE"] = "capture";
    ShopifyTransactionKinds["VOID"] = "void";
    ShopifyTransactionKinds["REFUND"] = "refund";
})(ShopifyTransactionKinds || (exports.ShopifyTransactionKinds = ShopifyTransactionKinds = {}));
var ShopifyFulfillmentStatuses;
(function (ShopifyFulfillmentStatuses) {
    ShopifyFulfillmentStatuses["PENDING"] = "pending";
    ShopifyFulfillmentStatuses["OPEN"] = "open";
    ShopifyFulfillmentStatuses["SUCCESS"] = "success";
    ShopifyFulfillmentStatuses["CANCELLED"] = "cancelled";
    ShopifyFulfillmentStatuses["ERROR"] = "error";
    ShopifyFulfillmentStatuses["FAILURE"] = "failure";
})(ShopifyFulfillmentStatuses || (exports.ShopifyFulfillmentStatuses = ShopifyFulfillmentStatuses = {}));
var ShopifyFulfillmentEventStatuses;
(function (ShopifyFulfillmentEventStatuses) {
    ShopifyFulfillmentEventStatuses["ATTEMPTED_DELIVERY"] = "attempted_delivery";
    ShopifyFulfillmentEventStatuses["CARRIER_PICKED_UP"] = "carrier_picked_up";
    ShopifyFulfillmentEventStatuses["CONFIRMED"] = "confirmed";
    ShopifyFulfillmentEventStatuses["DELAYED"] = "delayed";
    ShopifyFulfillmentEventStatuses["DELIVERED"] = "delivered";
    ShopifyFulfillmentEventStatuses["FAILURE"] = "failure";
    ShopifyFulfillmentEventStatuses["IN_TRANSIT"] = "in_transit";
    ShopifyFulfillmentEventStatuses["LABEL_PRINTED"] = "label_printed";
    ShopifyFulfillmentEventStatuses["LABEL_PURCHASED"] = "label_purchased";
    ShopifyFulfillmentEventStatuses["OUT_FOR_DELIVERY"] = "out_for_delivery";
    ShopifyFulfillmentEventStatuses["PICKED_UP"] = "picked_up";
    ShopifyFulfillmentEventStatuses["READY_FOR_PICKUP"] = "ready_for_pickup";
})(ShopifyFulfillmentEventStatuses || (exports.ShopifyFulfillmentEventStatuses = ShopifyFulfillmentEventStatuses = {}));
//# sourceMappingURL=types.js.map