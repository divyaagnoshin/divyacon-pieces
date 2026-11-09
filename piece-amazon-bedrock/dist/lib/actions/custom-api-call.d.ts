import { HttpMethod } from '@agnocon/pieces-common';
export declare const customApiCall: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessKeyId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secretAccessKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").OIDCProperty<{
    roleArn: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>)[], {
    service: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    method: import("@agnocon/pieces-framework").StaticDropdownProperty<HttpMethod, true>;
    path: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    headers: import("@agnocon/pieces-framework").ObjectProperty<false>;
    queryParams: import("@agnocon/pieces-framework").ObjectProperty<false>;
    body: import("@agnocon/pieces-framework").JsonProperty<false>;
    failsafe: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=custom-api-call.d.ts.map