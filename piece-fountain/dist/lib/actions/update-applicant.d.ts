export declare const fountainUpdateApplicant: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>, {
    id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    data: import("@agnocon/pieces-framework").ObjectProperty<false>;
    secure_data: import("@agnocon/pieces-framework").ObjectProperty<false>;
    rejection_reason: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-applicant.d.ts.map