interface DropdownParams {
    description?: string;
    displayName: string;
    required: boolean;
}
export declare const mailboxDropdown: (params: DropdownParams) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    tls: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    validateCertificates: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>>;
export {};
//# sourceMappingURL=props.d.ts.map