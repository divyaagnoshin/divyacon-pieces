export declare const BASE_URL = "https://api.bookedin.ai/api/v1";
export declare const getBookedinHeaders: (apiKey: string) => {
    'X-API-Key': string;
    accept: string;
};
export declare const extractApiKey: (auth: unknown) => string;
export declare const leadIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
export declare const leadIdsMultiSelectDropdown: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
//# sourceMappingURL=props.d.ts.map