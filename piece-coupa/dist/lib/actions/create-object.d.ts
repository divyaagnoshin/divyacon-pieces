export declare const createObject: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>, {
    module: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customResource: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bodyHelp: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    body: import("@agnocon/pieces-framework").JsonProperty<true>;
}>;
//# sourceMappingURL=create-object.d.ts.map