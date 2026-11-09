import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { PredictLeadsAuth } from '../auth';
import { PredictLeadsClient } from './client';
export declare function makeClient(auth: AppConnectionValueForAuthProperty<typeof PredictLeadsAuth>): PredictLeadsClient;
export declare const CommonFields: {
    readonly page: import("@agnocon/pieces-framework").NumberProperty<false>;
    readonly limit: import("@agnocon/pieces-framework").NumberProperty<false>;
};
export declare const pageField: import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const limitField: import("@agnocon/pieces-framework").NumberProperty<false>;
export declare const firstSeenAtFromField: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const firstSeenAtUntilField: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const lastSeenAtFromField: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const lastSeenAtUntilField: import("@agnocon/pieces-framework").ShortTextProperty<false>;
//# sourceMappingURL=index.d.ts.map