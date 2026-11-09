declare const _default: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instance_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>, {
    content: import("@agnocon/pieces-framework").LongTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    folder_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instance_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instance_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>>;
    visibility: import("@agnocon/pieces-framework").StaticDropdownProperty<import("../common/models/paste").PasteVisibility, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<import("../common/models/paste").PasteVisibility, true>;
    expiry: import("@agnocon/pieces-framework").DateTimeProperty<false>;
}>;
export default _default;
//# sourceMappingURL=create-paste.d.ts.map