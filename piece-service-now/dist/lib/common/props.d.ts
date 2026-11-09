import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { ServiceNowClient } from './client';
export declare const servicenowAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const tableDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>>;
export declare const recordDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>>;
export declare const catalogItemDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>>;
export declare function createServiceNowClient(auth: AppConnectionValueForAuthProperty<typeof servicenowAuth>): ServiceNowClient;
export declare function resolveSysId({ selected, manual, label, }: {
    selected: string | undefined;
    manual: string | undefined;
    label?: string;
}): string;
//# sourceMappingURL=props.d.ts.map