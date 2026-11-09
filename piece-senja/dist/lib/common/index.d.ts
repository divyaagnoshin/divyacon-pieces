import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare function senjaApiCall<T extends HttpMessageBody>({ token, method, path, body, queryParams, }: {
    token: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
}): Promise<HttpResponse<T>>;
export declare function mapTestimonial({ testimonial, eventType, }: {
    testimonial: Record<string, unknown>;
    eventType?: string | null;
}): {
    id: {} | null;
    type: {} | null;
    title: {} | null;
    text: {} | null;
    rating: {} | null;
    url: {} | null;
    date: {} | null;
    approved: {} | null;
    integration: {} | null;
    tags: any[];
    lang: {} | null;
    video_url: {} | null;
    thumbnail_url: {} | null;
    form_id: {} | null;
    project_id: {} | null;
    customer_name: {} | null;
    customer_email: {} | null;
    customer_company: {} | null;
    customer_tagline: {} | null;
    customer_username: {} | null;
    customer_url: {} | null;
    customer_avatar: {} | null;
    customer_company_logo: {} | null;
    customer_custom_data: {} | null;
    media: any[];
    video_duration: {} | null;
    video_aspect_ratio: {} | null;
    video_hls_url: {} | null;
    video_mp4_low: {} | null;
    video_mp4_medium: {} | null;
    video_mp4_high: {} | null;
    video_transcript: {} | null;
    translations: any[];
    created_at: {} | null;
    updated_at: {} | null;
    event_type?: string | null | undefined;
};
export declare const SENJA_BASE_URL = "https://api.senja.io/v1";
export declare const INTEGRATION_OPTIONS: {
    label: string;
    value: string;
}[];
//# sourceMappingURL=index.d.ts.map