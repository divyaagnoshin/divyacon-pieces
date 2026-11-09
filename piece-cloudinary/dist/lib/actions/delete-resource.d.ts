export declare const deleteResource: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    deletion_mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    resource_type: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    public_ids_dropdown: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    public_ids_manual: import("@agnocon/pieces-framework").LongTextProperty<false>;
    tag_dropdown: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    tag_manual: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    prefix: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    keep_original: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    invalidate: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=delete-resource.d.ts.map