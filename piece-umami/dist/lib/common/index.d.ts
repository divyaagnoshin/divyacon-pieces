import { HttpMethod, HttpMessageBody, HttpResponse, QueryParams } from '@agnocon/pieces-common';
import { UmamiAuthValue } from '../auth';
export declare function umamiApiCall<T extends HttpMessageBody>({ auth, method, path, body, queryParams, }: {
    auth: UmamiAuthValue;
    method: HttpMethod;
    path: string;
    queryParams?: QueryParams;
    body?: unknown;
}): Promise<HttpResponse<T>>;
export declare const umamiCommon: {
    websiteDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").SecretTextProperty<true> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>)[]>;
    dateRange: {
        startDate: import("@agnocon/pieces-framework").DateTimeProperty<true>;
        endDate: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    };
};
//# sourceMappingURL=index.d.ts.map