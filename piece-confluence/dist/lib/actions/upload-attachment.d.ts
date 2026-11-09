export declare const uploadAttachmentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    confluenceDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    spaceId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        confluenceDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        confluenceDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    pageId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        confluenceDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        confluenceDomain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    comment: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    minorEdit: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=upload-attachment.d.ts.map