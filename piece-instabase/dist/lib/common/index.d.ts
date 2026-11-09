import { instabaseAuth } from '../auth';
import { HttpMethod } from '@agnocon/pieces-common';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const createInstabaseHeaders: (auth: AppConnectionValueForAuthProperty<typeof instabaseAuth>) => Record<string, string>;
export declare const makeInstabaseApiCall: <T = any>(auth: AppConnectionValueForAuthProperty<typeof instabaseAuth>, endpoint: string, method?: HttpMethod, body?: any) => Promise<T>;
//# sourceMappingURL=index.d.ts.map