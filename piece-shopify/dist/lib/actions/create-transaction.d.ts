import { ShopifyTransactionKinds } from '../common/types';
export declare const createTransactionAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    shopName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    adminToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    orderId: import("@agnocon/pieces-framework").NumberProperty<true>;
    kind: import("@agnocon/pieces-framework").DropdownProperty<ShopifyTransactionKinds, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        shopName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        adminToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    amount: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    authorization: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    parentId: import("@agnocon/pieces-framework").NumberProperty<false>;
    source: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    test: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-transaction.d.ts.map