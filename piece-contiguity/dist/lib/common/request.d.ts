import { HttpMethod, HttpRequest } from '@agnocon/pieces-common';
export declare const CONTIGUITY_API_BASE_URL = "https://api.contiguity.com";
export interface ContiguityRequestConfig {
    method: HttpMethod;
    endpoint: string;
    body?: any;
    auth: string;
}
export declare const contiguityHeaders: (auth: string) => Record<string, string>;
export declare const contiguityRequest: (config: ContiguityRequestConfig) => HttpRequest;
export declare const _fetch: (config: ContiguityRequestConfig) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
//# sourceMappingURL=request.d.ts.map