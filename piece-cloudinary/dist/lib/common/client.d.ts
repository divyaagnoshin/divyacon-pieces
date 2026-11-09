import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { cloudinaryAuth } from './auth';
export declare const BASE_URL = "https://api.cloudinary.com/v1_1";
export declare function makeRequest(auth: AppConnectionValueForAuthProperty<typeof cloudinaryAuth>, method: HttpMethod, path: string, body?: unknown, queryParams?: Record<string, any>): Promise<any>;
//# sourceMappingURL=client.d.ts.map