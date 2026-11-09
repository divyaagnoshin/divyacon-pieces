export declare const createDataEventAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    identifierType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    identifierValue: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    eventName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    createdAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    metadata: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-data-event.d.ts.map