import { HttpMethod } from '@agnocon/pieces-common';
interface KommoAuth {
    subdomain: string;
    apiToken: string;
}
export declare function makeRequest(auth: KommoAuth, method: HttpMethod, path: string, body?: unknown): Promise<any>;
export {};
//# sourceMappingURL=index.d.ts.map