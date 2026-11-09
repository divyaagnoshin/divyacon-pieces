export declare const purchaseId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
export declare const purchaserEmailAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
export declare const purchasesPageNumber: import("@agnocon/pieces-framework").NumberProperty<true>;
export declare const transactionId: import("@agnocon/pieces-framework").NumberProperty<true>;
export declare const productId: import("@agnocon/pieces-framework").NumberProperty<true>;
export declare const status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const currency: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
export declare const transactionTime: import("@agnocon/pieces-framework").DateTimeProperty<false>;
export declare const subtotal: import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const shipping: import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const discount: import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const tax: import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const total: import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const products: {
    pid: import("@agnocon/pieces-framework").NumberProperty<true>;
    lid: import("@agnocon/pieces-framework").NumberProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sku: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    unit_price: import("@agnocon/pieces-framework").NumberProperty<true>;
    quantity: import("@agnocon/pieces-framework").NumberProperty<true>;
};
export declare const multipleProducts: import("@agnocon/pieces-framework").JsonProperty<true>;
//# sourceMappingURL=index.d.ts.map