export declare const wafeqProps: {
    contactDropdown: (params?: {
        displayName?: string;
        required?: boolean;
        description?: string;
    }) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    itemDropdown: (params?: {
        displayName?: string;
        required?: boolean;
        description?: string;
    }) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    invoiceDropdown: (params?: {
        displayName?: string;
        required?: boolean;
        description?: string;
    }) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    quoteDropdown: (params?: {
        displayName?: string;
        required?: boolean;
        description?: string;
    }) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    accountDropdown: (params?: {
        displayName?: string;
        description?: string;
        required?: boolean;
        paymentEnabledOnly?: boolean;
        classification?: AccountClassification;
    }) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    taxRateDropdown: (params?: {
        displayName?: string;
        required?: boolean;
        description?: string;
    }) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    currency: (params?: {
        required?: boolean;
        defaultValue?: string;
    }) => import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    lineItemsArray: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
    idempotencyKey: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    externalId: (displayName?: string) => import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
export declare const COMMON_CURRENCIES: ReadonlyArray<{
    code: string;
    name: string;
}>;
export type LineItemInput = {
    item?: string;
    description: string;
    quantity: number;
    unit_amount: number;
    account: string;
    tax_rate?: string;
    discount?: number;
};
export type ContactListItem = {
    id: string;
    name: string;
    email?: string | null;
};
export type ItemListItem = {
    id: string;
    name: string;
    sku?: string | null;
};
export type InvoiceListItem = {
    id: string;
    invoice_number: string;
    amount: number;
    currency: string;
};
export type QuoteListItem = {
    id: string;
    quote_number: string;
    amount: number;
    currency: string;
};
export type AccountListItem = {
    id: string;
    account_code?: string | null;
    name_en?: string | null;
    name_ar?: string | null;
};
export type TaxRateListItem = {
    id: string;
    name: string;
    rate?: number | null;
};
export type AccountClassification = 'REVENUE' | 'EXPENSE' | 'ASSET' | 'LIABILITY' | 'EQUITY';
//# sourceMappingURL=props.d.ts.map