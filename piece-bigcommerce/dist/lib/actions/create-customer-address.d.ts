export declare const createCustomerAddress: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instruction: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    storeHash: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    accessToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    customer_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instruction: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        storeHash: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        accessToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instruction: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        storeHash: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        accessToken: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    address1: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    address2: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    city: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    state_or_province: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    postal_code: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    country_code: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-customer-address.d.ts.map