export declare const createOrUpdateLeadAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    leadId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    unsubscribe: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    createdAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    customAttributes: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-update-lead.d.ts.map