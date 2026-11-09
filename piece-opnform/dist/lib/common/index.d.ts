import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { opnformAuth } from '../auth';
export declare const API_URL_DEFAULT = "https://api.opnform.com";
export declare const workspaceIdProp: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const formIdProp: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const opnformCommon: {
    getBaseUrl: (auth: AppConnectionValueForAuthProperty<typeof opnformAuth>) => string;
    validateAuth: (auth: AppConnectionValueForAuthProperty<typeof opnformAuth>) => Promise<boolean>;
    checkExistsIntegration: (auth: AppConnectionValueForAuthProperty<typeof opnformAuth>, formId: string, flowUrl: string) => Promise<any>;
    createIntegration: (auth: AppConnectionValueForAuthProperty<typeof opnformAuth>, formId: string, webhookUrl: string, flowUrl: string) => Promise<number | null>;
    createOrUpdateIntegration: (auth: AppConnectionValueForAuthProperty<typeof opnformAuth>, formId: string, webhookUrl: string, flowUrl: string) => Promise<any>;
    deleteIntegration: (auth: AppConnectionValueForAuthProperty<typeof opnformAuth>, formId: string, integrationId: number) => Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
};
//# sourceMappingURL=index.d.ts.map