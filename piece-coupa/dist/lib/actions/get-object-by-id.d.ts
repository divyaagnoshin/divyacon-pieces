export declare const getObjectById: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    module: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customResource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    record: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
    }>>;
    queryParams: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=get-object-by-id.d.ts.map