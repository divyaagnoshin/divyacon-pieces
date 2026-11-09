import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { goodmemAuth } from '../../index';
export interface GoodMemAuthConfig {
    baseUrl: string;
    apiKey: string;
}
export declare function extractAuthFromContext(auth: AppConnectionValueForAuthProperty<typeof goodmemAuth>): GoodMemAuthConfig;
export declare function getBaseUrl(baseUrl: string): string;
export declare function getCommonHeaders(apiKey: string): Record<string, string>;
export declare const spaceIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const multiSpaceDropdown: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const rerankerDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const llmDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
//# sourceMappingURL=index.d.ts.map