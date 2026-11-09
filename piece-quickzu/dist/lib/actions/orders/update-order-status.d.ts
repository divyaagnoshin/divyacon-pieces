import { OrderStatus } from '../../common/constants';
export declare const updateOrderStatusAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    orderId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderStatus, true>;
}>;
//# sourceMappingURL=update-order-status.d.ts.map