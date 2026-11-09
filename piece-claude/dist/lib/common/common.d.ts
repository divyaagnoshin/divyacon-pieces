export declare const baseUrl = "https://api.anthropic.com/v1";
export declare const billingIssueMessage = "Error Occurred: 429 \n\n\n1. Ensure that you have enough tokens on your Anthropic platform. \n\n2. Generate a new API key. \n\n3. Attempt the process again. \n\n\nFor guidance, visit: https://console.anthropic.com/settings/plans";
export declare const unauthorizedMessage = "Error Occurred: 401 \n\n\nEnsure that your API key is valid. \n\n";
export declare const modelDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
//# sourceMappingURL=common.d.ts.map