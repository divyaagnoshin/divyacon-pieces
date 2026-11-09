import { HttpMethod } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://api.timeops.dk/api/v1";
export declare const timeOpsClient: {
    makeRequest<T>(auth: string, method: HttpMethod, endpoint: string, body?: unknown): Promise<T>;
};
//# sourceMappingURL=index.d.ts.map