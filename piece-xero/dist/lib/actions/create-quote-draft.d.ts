export declare const xeroCreateQuoteDraft: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    tenant_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    contact_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    date: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    expiry_date: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    line_item: import("@agnocon/pieces-framework").ObjectProperty<true>;
    line_amount_types: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    reference: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    quote_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    summary: import("@agnocon/pieces-framework").LongTextProperty<false>;
    terms: import("@agnocon/pieces-framework").LongTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-quote-draft.d.ts.map