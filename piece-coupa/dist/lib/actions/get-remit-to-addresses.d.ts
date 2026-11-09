export declare const getRemitToAddresses: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    parentModule: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    parentRecord: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=get-remit-to-addresses.d.ts.map