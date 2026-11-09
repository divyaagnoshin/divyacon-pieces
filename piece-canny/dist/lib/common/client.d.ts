export declare const CANNY_API_BASE = "https://canny.io/api/v1";
/**
 * All Canny API endpoints use POST with JSON body.
 * Authentication is via an `apiKey` field in the request body.
 */
export declare function cannyRequest<T = unknown>({ apiKey, path, body, }: {
    apiKey: string;
    path: string;
    body?: Record<string, unknown>;
}): Promise<T>;
/**
 * Strip undefined/null/empty-string values from an object before sending.
 */
export declare function cleanBody(obj: Record<string, unknown>): Record<string, unknown>;
//# sourceMappingURL=client.d.ts.map