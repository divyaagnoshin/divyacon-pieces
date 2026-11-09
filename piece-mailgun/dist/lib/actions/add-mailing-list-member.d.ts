export declare const addMailingListMember: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>, {
    list: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
    address: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    upsert: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    subscribed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    vars: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=add-mailing-list-member.d.ts.map