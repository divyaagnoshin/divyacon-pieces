import { HttpMethod, HttpMessageBody } from '@agnocon/pieces-common';
export declare const OMNISEND_API_BASE = "https://api.omnisend.com/api";
export declare function omnisendRequest<T extends HttpMessageBody>(method: HttpMethod, path: string, apiKey: string, body?: Record<string, unknown>, queryParams?: Record<string, string>): Promise<T>;
//# sourceMappingURL=client.d.ts.map