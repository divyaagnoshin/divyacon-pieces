import { HttpMethod, HttpResponse } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://proxy.whatsscale.com";
export declare function whatsscaleClient(auth: string, method: HttpMethod, path: string, body?: Record<string, unknown>, queryParams?: Record<string, string>): Promise<HttpResponse>;
//# sourceMappingURL=client.d.ts.map