import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
declare function uxsniffApiCall<T extends HttpMessageBody>({ apiKey, method, path, queryParams, body, }: {
    apiKey: string;
    method: HttpMethod;
    path: string;
    queryParams?: Record<string, string | number | undefined>;
    body?: unknown;
}): Promise<HttpResponse<T>>;
declare function toEpochMillis(value: unknown): number;
declare function startDateFromEpoch(epochMillis: number): string;
export declare const uxsniffCommon: {
    apiCall: typeof uxsniffApiCall;
    toEpochMillis: typeof toEpochMillis;
    startDateFromEpoch: typeof startDateFromEpoch;
    surveyDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export type UxsniffSurvey = {
    survey_id: string | number;
    survey_name: string;
    active: boolean;
};
export type UxsniffVisitor = {
    visitor_id?: string;
    session_id?: string;
    email?: string;
    device?: string;
    country?: string;
    browser?: string;
    browserSize?: string;
    os?: string;
};
export type UxsniffFeedback = {
    feedback_id: string | number;
    question?: string;
    comment?: string;
    rating?: number | string;
    created?: string | number;
    url?: string;
    screenshot?: string;
    visitor?: UxsniffVisitor;
};
export type UxsniffSurveyResponse = {
    id: string | number;
    client_id?: string;
    sessio_id?: string;
    session_id?: string;
    answers?: unknown;
    url?: string;
    country?: string;
    countryName?: string;
    created?: string | number;
    os?: string;
    browser?: string;
    referrer?: string;
};
export {};
//# sourceMappingURL=index.d.ts.map