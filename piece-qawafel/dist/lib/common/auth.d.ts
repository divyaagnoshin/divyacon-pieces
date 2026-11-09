import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare const qawafelAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>;
export declare function getQawafelBaseUrl(auth: QawafelAuth): string;
export declare const PRODUCTION_API_BASE_URL = "https://core.qawafel.sa/api/v1";
export declare const DEVELOPMENT_API_BASE_URL = "https://core.development.qawafel.dev/api/v1";
export type QawafelAuth = AppConnectionValueForAuthProperty<typeof qawafelAuth>;
//# sourceMappingURL=auth.d.ts.map