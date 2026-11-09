import { ShopifyProductStatuses } from '../common/types';
export declare const createProductAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    shopName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    adminToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    bodyHtml: import("@agnocon/pieces-framework").LongTextProperty<false>;
    productType: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    productImage: import("@agnocon/pieces-framework").FileProperty<false, false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<ShopifyProductStatuses, true>;
    vendor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tags: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-product.d.ts.map