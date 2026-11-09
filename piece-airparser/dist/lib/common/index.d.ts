import { HttpMessageBody, HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.airparser.com";
export type AirparserApiCallParams = {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    query?: Record<string, string | number | string[] | undefined>;
    body?: any;
};
export declare function airparserApiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, query, body, }: AirparserApiCallParams): Promise<T>;
export interface GetDocumentResponse {
    json: any;
    _id: string;
    inbox_id: string;
    owner_id: string;
    name: string;
    data_text: string;
    format: string;
    status: string;
    created_at: string;
    processed_at: string;
    secret: string;
    filename: string;
    content_type: string;
    credits: number;
}
//# sourceMappingURL=index.d.ts.map