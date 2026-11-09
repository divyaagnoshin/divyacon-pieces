import { zuoraAuth } from '../auth';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
export declare function queryAccounts(auth: AppConnectionValueForAuthProperty<typeof zuoraAuth>): Promise<Record<string, any>[]>;
export declare function getAccessToken(auth: AppConnectionValueForAuthProperty<typeof zuoraAuth>): Promise<string>;
export declare const zuoraCommonProps: {
    account_id: (displayName: string, description: string, required: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        clientSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        clientId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        clientSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        environment: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>>;
};
//# sourceMappingURL=index.d.ts.map