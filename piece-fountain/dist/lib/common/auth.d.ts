import { fountainAuth } from '../auth';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare function getBaseUrl(auth: AppConnectionValueForAuthProperty<typeof fountainAuth>): string;
export declare function getApiUrl(auth: AppConnectionValueForAuthProperty<typeof fountainAuth>, endpoint: string): string;
export declare function getAuthHeaders(auth: AppConnectionValueForAuthProperty<typeof fountainAuth>): {
    Authorization: string;
    'Content-Type': string;
};
//# sourceMappingURL=auth.d.ts.map