import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { openmicAiAuth } from './auth';
export declare const BASE_URL = "https://api.openmic.ai/v1";
export declare function makeRequest(api_key: AppConnectionValueForAuthProperty<typeof openmicAiAuth>, method: HttpMethod, path: string, body?: unknown): Promise<any>;
//# sourceMappingURL=client.d.ts.map