export declare const uploadResource: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    public_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    folder: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    tags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    overwrite: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    use_filename: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=upload-resource.d.ts.map