import { HttpMethod, HttpMessageBody, QueryParams } from '@agnocon/pieces-common';
export declare function greenhouseApiCall<T extends HttpMessageBody>({ accessToken, method, endpoint, body, queryParams, }: {
    accessToken: string;
    method: HttpMethod;
    endpoint: string;
    body?: Record<string, unknown>;
    queryParams?: QueryParams;
}): Promise<import("@agnocon/pieces-common").HttpResponse<T>>;
export type GreenhouseCandidate = {
    id: number;
    first_name: string;
    last_name: string;
    preferred_name: string | null;
    company: string | null;
    title: string | null;
    created_at: string;
    updated_at: string;
    last_activity_at: string | null;
    private: boolean;
    can_email: boolean;
    tags: string[];
    email_addresses: {
        value: string;
        type: string;
    }[];
    phone_numbers: {
        value: string;
        type: string;
    }[];
    website_addresses: {
        value: string;
        type: string;
    }[];
    social_media_addresses: {
        value: string;
    }[];
};
export declare function shapeCandidate(c: GreenhouseCandidate): {
    id: number;
    first_name: string;
    last_name: string;
    preferred_name: string | null;
    company: string | null;
    title: string | null;
    created_at: string;
    updated_at: string;
    last_activity_at: string | null;
    private: boolean;
    can_email: boolean;
    primary_email: string;
    primary_email_type: string;
    primary_phone: string;
    primary_phone_type: string;
    website_url: string | null;
    linkedin_url: string;
    tags: string;
};
//# sourceMappingURL=index.d.ts.map