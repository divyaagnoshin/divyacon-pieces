export declare const agentIdDropdown: (displayName: string, required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const callIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const voiceIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const numberProviderDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const languageDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const sttModeDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const denoisingModeDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
//# sourceMappingURL=props.d.ts.map