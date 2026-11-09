"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType["subscriberActivate"] = "subscriber.subscriber_activate";
    EventType["subscriberUnsubscribe"] = "subscriber.subscriber_unsubscribe";
    EventType["subscriberBounce"] = "subscriber.subscriber_bounce";
    EventType["subscriberComplain"] = "subscriber.subscriber_complain";
    EventType["formSubscribe"] = "subscriber.form_subscribe";
    EventType["courseSubscribe"] = "subscriber.course_subscribe";
    EventType["courseComplete"] = "subscriber.course_complete";
    EventType["linkClick"] = "subscriber.link_click";
    EventType["productPurchase"] = "subscriber.product_purchase";
    EventType["tagAdd"] = "subscriber.tag_add";
    EventType["tagRemove"] = "subscriber.tag_remove";
    EventType["purchaseCreate"] = "purchase.purchase_create";
})(EventType || (exports.EventType = EventType = {}));
//# sourceMappingURL=types.js.map