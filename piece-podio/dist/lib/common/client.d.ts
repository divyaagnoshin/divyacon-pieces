import { HttpMethod } from '@agnocon/pieces-common';
export declare const PODIO_API_URL = "https://api.podio.com";
export interface PodioApiCallOptions {
    method: HttpMethod;
    accessToken: string;
    resourceUri: string;
    body?: any;
    queryParams?: Record<string, any>;
}
export declare function podioApiCall<T = any>(options: PodioApiCallOptions): Promise<T>;
export declare function getErrorMessage(errorBody: any): string | null;
export declare function getRateLimitMessage(headers: any): string;
export declare function validateRequiredFields(data: Record<string, any>, requiredFields: string[]): void;
export declare function validateArrayLimits(arrays: Array<{
    name: string;
    value: any[];
    maxLength: number;
}>): void;
//# sourceMappingURL=client.d.ts.map