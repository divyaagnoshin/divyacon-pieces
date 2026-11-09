import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import type { mistralAuth } from './auth';
export type MistralAuthValue = AppConnectionValueForAuthProperty<typeof mistralAuth>;
declare function getConfig(auth: MistralAuthValue): MistralRequestConfig;
export declare const mistralRequest: {
    getConfig: typeof getConfig;
};
export type MistralRequestConfig = {
    baseUrl: string;
    headers: Record<string, string>;
};
export {};
//# sourceMappingURL=request.d.ts.map