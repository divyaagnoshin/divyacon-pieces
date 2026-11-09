import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { PastebinClient } from './client';
import { pastebinAuth } from '../..';
export declare const pastebinCommon: {
    paste_format: (required?: boolean) => import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
};
export declare function makeClient(auth: AppConnectionValueForAuthProperty<typeof pastebinAuth>): Promise<PastebinClient>;
//# sourceMappingURL=index.d.ts.map