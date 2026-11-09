import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { phantombusterAuth } from './auth';
export declare const BASE_URL = "https://api.phantombuster.com/api/v2";
export declare function makeRequest(apiKey: AppConnectionValueForAuthProperty<typeof phantombusterAuth>, method: HttpMethod, path: string, body?: unknown): Promise<any>;
//# sourceMappingURL=client.d.ts.map