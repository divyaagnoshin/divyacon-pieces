import { HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { coralogixAuth } from './auth';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
type CoralogixApiType = 'management' | 'ingestion';
export declare const MANAGEMENT_DOMAIN: Record<string, string>;
export declare function makeRequest(auth: AppConnectionValueForAuthProperty<typeof coralogixAuth>, apiType: CoralogixApiType, method: HttpMethod, path: string, body?: unknown, queryParams?: QueryParams): Promise<any>;
export {};
//# sourceMappingURL=client.d.ts.map