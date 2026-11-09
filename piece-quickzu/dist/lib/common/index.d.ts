import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { quickzuAuth } from '../auth';
import { QuickzuAPIClient } from './client';
export declare function makeClient(auth: AppConnectionValueForAuthProperty<typeof quickzuAuth>): QuickzuAPIClient;
export declare const quickzuCommon: {
    categoryId: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    productId: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    orderId: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
//# sourceMappingURL=index.d.ts.map