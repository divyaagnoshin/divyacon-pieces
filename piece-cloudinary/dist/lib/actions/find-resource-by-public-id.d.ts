export declare const findResourceByPublicId: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    resource_type: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    public_id_dropdown: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_secret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        cloud_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    public_id_manual: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    delivery_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=find-resource-by-public-id.d.ts.map