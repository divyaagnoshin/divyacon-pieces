import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { mondayClient } from './client';
import { mondayAuth } from '../auth';
export declare function makeClient(auth: AppConnectionValueForAuthProperty<typeof mondayAuth>): mondayClient;
export declare const mondayCommon: {
    workspace_id: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    board_id: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    group_id: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    item_id: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    columnIds: (required?: boolean) => import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    columnValues: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
//# sourceMappingURL=index.d.ts.map