import { ApiErrorPayload } from './types';
export declare class HedyApiError extends Error {
    readonly code: string;
    readonly details?: unknown;
    constructor(code: string, message: string, details?: unknown);
    static fromPayload(payload: ApiErrorPayload | undefined, fallback?: unknown, statusCode?: number): HedyApiError;
}
//# sourceMappingURL=errors.d.ts.map