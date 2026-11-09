export declare const createNote: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    dynamic_resource_id: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    content: import("@agnocon/pieces-framework").LongTextProperty<true>;
    is_important: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=create_note.d.ts.map