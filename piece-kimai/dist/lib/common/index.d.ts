import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { kimaiAuth } from '../..';
import { KimaiClient } from './client';
export declare const kimaiCommon: {
    project: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    activity: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        api_password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
};
export declare function makeClient(auth: AppConnectionValueForAuthProperty<typeof kimaiAuth>): Promise<KimaiClient>;
//# sourceMappingURL=index.d.ts.map