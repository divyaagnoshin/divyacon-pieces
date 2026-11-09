import { HttpMethod, HttpMessageBody, HttpHeaders } from '@agnocon/pieces-common';
/**
 * Single entry point for every FileToPDF call. Sends the API key in the
 * `x-api-key` header (the API has no bearer scheme) and asks for the JSON
 * envelope by default so conversions return base64 PDF + metadata. Any non-2xx
 * is converted to a friendly Error.
 */
export declare function filetopdfApiCall<T extends HttpMessageBody>({ apiKey, method, resourceUri, body, headers, }: FileToPdfRequest): Promise<T>;
interface FileToPdfRequest {
    apiKey: string;
    method: HttpMethod;
    resourceUri: string;
    body?: HttpMessageBody;
    /** Extra headers (e.g. multipart boundary from form-data.getHeaders()). */
    headers?: HttpHeaders;
}
export {};
//# sourceMappingURL=client.d.ts.map