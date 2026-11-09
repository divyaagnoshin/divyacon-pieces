import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { guideliteAuth } from '../common/auth';
export declare const BASE_URL = "https://api.guidelite.ai/external-api/v1";
export declare function makeRequest({ secret_text }: AppConnectionValueForAuthProperty<typeof guideliteAuth>, method: HttpMethod, path: string, body?: unknown): Promise<any>;
//# sourceMappingURL=client.d.ts.map