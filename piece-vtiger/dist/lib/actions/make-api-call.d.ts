import { HttpMethod } from '@agnocon/pieces-common';
export declare const makeAPICall: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    instance_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    method: import("@agnocon/pieces-framework").StaticDropdownProperty<HttpMethod, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<HttpMethod, true>;
    url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    urlPath: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    headers: import("@agnocon/pieces-framework").JsonProperty<false>;
    data: import("@agnocon/pieces-framework").JsonProperty<false>;
}>;
//# sourceMappingURL=make-api-call.d.ts.map