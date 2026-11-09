import { HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
declare function provenExpertApiCall<T extends HttpMessageBody>({ auth, path, body, }: {
    auth: {
        api_id: string;
        api_key: string;
    };
    path: string;
    body?: Record<string, unknown>;
}): Promise<HttpResponse<T>>;
export declare const provenExpertCommon: {
    apiCall: typeof provenExpertApiCall;
    surveyDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        api_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    baseUrl: string;
};
export type ProvenExpertAuth = {
    api_id: string;
    api_key: string;
};
export {};
//# sourceMappingURL=index.d.ts.map