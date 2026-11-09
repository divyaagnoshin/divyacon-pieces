import { ShopifyFulfillmentEventStatuses } from '../common/types';
export declare const createFulfillmentEventAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    shopName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    adminToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    orderId: import("@agnocon/pieces-framework").NumberProperty<true>;
    fulfillmentId: import("@agnocon/pieces-framework").NumberProperty<true>;
    status: import("@agnocon/pieces-framework").DropdownProperty<ShopifyFulfillmentEventStatuses, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        shopName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        adminToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    message: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-fulfillment-event.d.ts.map