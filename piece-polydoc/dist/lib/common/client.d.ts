import { type HttpHeaders } from '@agnocon/pieces-common';
import type { PolyDocRequest } from './types';
export interface PolyDocResponse {
    status: number;
    headers: HttpHeaders;
    body: unknown;
}
/**
 * Perform an authenticated PolyDoc API call. Sets the Bearer token and the
 * per-request X-Sandbox header, and requests bytes or JSON depending on the
 * delivery mode. Returns the full response so callers can read binary bytes +
 * headers or the JSON delivery confirmation.
 */
export declare function polyDocRequest(auth: any, request: PolyDocRequest): Promise<PolyDocResponse>;
/**
 * Best-effort extraction of PolyDoc's `{ error, message }` from a thrown HTTP
 * error, including the binary path where the error body arrives as bytes.
 */
export declare function extractApiErrorMessage(error: unknown): string | undefined;
//# sourceMappingURL=client.d.ts.map