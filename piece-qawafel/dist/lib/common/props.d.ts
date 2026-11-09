export declare const qawafelProps: {
    merchantDropdown: (params?: {
        displayName?: string;
        description?: string;
        required?: boolean;
        type?: "customer" | "supplier";
    }) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    productDropdown: (params?: {
        displayName?: string;
        description?: string;
        required?: boolean;
        type?: "sale" | "purchase";
    }) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    orderLineItemsArray: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
    invoiceLineItemsArray: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
    addressGroup: import("@agnocon/pieces-framework").ObjectProperty<true>;
    idempotencyKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    externalRef: (displayName?: string) => import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
export declare const TRANSITIONS_BY_STATE: Record<string, OrderTransitionOption[]>;
export declare const ALL_TRANSITIONS_FALLBACK: OrderTransitionOption[];
export type OrderLineItemInput = {
    product_id: string;
    quantity: number;
    unit_price: string;
    discount_percentage?: string;
    external_ref?: string;
};
export type InvoiceLineItemInput = {
    product_id: string;
    quantity: number;
    unit_price: string;
    vat_percentage: string;
    discount_percentage?: string;
    external_ref?: string;
};
export type MerchantListItem = {
    id: string;
    legal_name?: string | null;
    name_en?: string | null;
    name_ar?: string | null;
    type?: 'customer' | 'supplier';
};
export type ProductListItem = {
    id: string;
    sku?: string | null;
    name_en?: string | null;
    name_ar?: string | null;
};
type OrderTransition = 'confirm' | 'ready-for-pickup' | 'out-for-delivery' | 'deliver' | 'not-delivered' | 'fulfill';
type OrderTransitionOption = {
    label: string;
    value: OrderTransition;
};
export {};
//# sourceMappingURL=props.d.ts.map