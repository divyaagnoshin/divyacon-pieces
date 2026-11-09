type DropdownParams = {
    displayName: string;
    description: string;
    required: boolean;
};
export declare const messageIdDropdown: (params: DropdownParams) => import("@agnocon/pieces-framework").DropdownProperty<string | undefined, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string | undefined, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const draftMessageIdDropdown: (params: DropdownParams) => import("@agnocon/pieces-framework").DropdownProperty<string | undefined, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string | undefined, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export declare const mailFolderIdDropdown: (params: DropdownParams) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
export {};
//# sourceMappingURL=props.d.ts.map