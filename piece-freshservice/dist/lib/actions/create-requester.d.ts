export declare const createRequester: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    first_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    primary_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    last_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    job_title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    mobile_phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    department_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    custom_fields: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=create-requester.d.ts.map