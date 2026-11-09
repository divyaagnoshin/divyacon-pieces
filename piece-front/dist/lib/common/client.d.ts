import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { frontAuth } from './auth';
export declare const BASE_URL = "https://api2.frontapp.com";
export declare function makeRequest({ secret_text }: AppConnectionValueForAuthProperty<typeof frontAuth>, method: HttpMethod, path: string, body?: unknown): Promise<any>;
//# sourceMappingURL=client.d.ts.map