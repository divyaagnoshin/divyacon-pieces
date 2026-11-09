export declare const addSourceToPayerAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    payerId: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    sourceType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    useToken: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    token: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    ipAddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankAccountNumber: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankAccountBsb: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bankAccountName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=add-source-to-payer.d.ts.map