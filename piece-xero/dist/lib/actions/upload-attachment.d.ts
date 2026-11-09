export declare const xeroUploadAttachment: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    tenant_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    resource_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    resource_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    file: import("@agnocon/pieces-framework").FileProperty<true, false>;
    file_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    content_type: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    include_online: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=upload-attachment.d.ts.map