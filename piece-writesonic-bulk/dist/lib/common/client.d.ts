import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { writesonicBulkAuth } from './auth';
export declare const BASE_URL = "https://api.writesonic.com/v2/business";
export declare function makeRequest(api_key: AppConnectionValueForAuthProperty<typeof writesonicBulkAuth>, method: HttpMethod, path: string, body?: unknown): Promise<any>;
//# sourceMappingURL=client.d.ts.map