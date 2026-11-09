import { AppConnectionValueForAuthProperty, PiecePropertyMap, StaticPropsValue } from '@agnocon/pieces-framework';
import { PastefyClient } from './client';
import { PasteVisibility } from './models/paste';
import { pastefyAuth } from '../..';
export declare function formatDate(date?: string): string | undefined;
export declare const pastefyCommon: {
    folder_id: (required?: boolean, displayName?: string) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instance_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        instance_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>>;
    visibility: (required?: boolean) => import("@agnocon/pieces-framework").StaticDropdownProperty<PasteVisibility, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<PasteVisibility, true>;
};
export declare function makeClient(auth: AppConnectionValueForAuthProperty<typeof pastefyAuth>, propsValue: StaticPropsValue<PiecePropertyMap>): PastefyClient;
//# sourceMappingURL=index.d.ts.map