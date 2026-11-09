export declare const transformResource: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
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
    public_id_manual: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    width: import("@agnocon/pieces-framework").NumberProperty<false>;
    height: import("@agnocon/pieces-framework").NumberProperty<false>;
    crop_mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    gravity: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    quality: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    border: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    radius: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    opacity: import("@agnocon/pieces-framework").NumberProperty<false>;
    rotation: import("@agnocon/pieces-framework").NumberProperty<false>;
    raw_transformation: import("@agnocon/pieces-framework").LongTextProperty<false>;
    generate_url_only: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=transform-resource.d.ts.map