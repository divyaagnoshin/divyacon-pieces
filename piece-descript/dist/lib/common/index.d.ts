import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
import { getAuthToken } from '../auth';
type ProjectSummary = {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
};
declare function descriptApiCall<T extends HttpMessageBody>({ apiKey, method, path, body, queryParams, }: {
    apiKey: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
}): Promise<HttpResponse<T>>;
declare function fetchAllProjects(apiKey: string): Promise<ProjectSummary[]>;
export declare const descriptCommon: {
    BASE_URL: string;
    descriptApiCall: typeof descriptApiCall;
    fetchAllProjects: typeof fetchAllProjects;
    getAuthToken: typeof getAuthToken;
    projectIdProp: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    compositionIdProp: (required: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export {};
//# sourceMappingURL=index.d.ts.map