export declare const renameFileOrFolderAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    protocol: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    allow_unauthorized_certificates: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    allow_anonymous_login: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    algorithm: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
}>, {
    information: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    oldPath: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    newPath: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=rename-file-or-folder.d.ts.map