import { HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { pdfmonkeyAuth } from './auth';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const BASE_URL = "https://api.pdfmonkey.io/api/v1";
export declare function makeRequest<T>(api_key: AppConnectionValueForAuthProperty<typeof pdfmonkeyAuth>, method: HttpMethod, path: string, query?: QueryParams, body?: unknown): Promise<T>;
//# sourceMappingURL=client.d.ts.map