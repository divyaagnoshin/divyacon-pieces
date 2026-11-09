import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { dripAuth } from '../auth';
export declare const dripCommon: {
    baseUrl: (accountId: string) => string;
    account_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    subscriber: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    tags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    custom_fields: import("@agnocon/pieces-framework").ObjectProperty<false>;
    authorizationHeader: (apiKey: AppConnectionValueForAuthProperty<typeof dripAuth>) => string;
};
//# sourceMappingURL=index.d.ts.map