import { IntercomClient } from 'intercom-client';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { intercomAuth } from '../auth';
export type IntercomAuthValue = AppConnectionValueForAuthProperty<typeof intercomAuth>;
export declare function getIntercomToken(auth: IntercomAuthValue): string;
export declare function getIntercomRegion(auth: IntercomAuthValue): string;
export declare const intercomClient: (auth: IntercomAuthValue) => IntercomClient;
export declare const commonProps: {
    admins: <R extends boolean>(options: {
        displayName: string;
        required: R;
    }) => R extends true ? import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]> : import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]>;
    contacts: <R extends boolean>(options: {
        displayName: string;
        required: R;
    }) => R extends true ? import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]> : import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        region: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    }>)[]>;
};
export type Operator = '=' | '!=' | 'IN' | 'NIN' | '<' | '>' | '~' | '!~' | '^' | '$';
export type TriggerPayload = {
    type: string;
    app_id: string;
    id: string;
    topic: string;
    data: {
        type: string;
        item: Record<string, any>;
    };
};
//# sourceMappingURL=index.d.ts.map