import { PiecePropValueSchema } from '@agnocon/pieces-framework';
import { dynamicsCRMAuth } from '../auth';
import { DynamicsCRMClient } from './client';
export declare function makeClient(auth: PiecePropValueSchema<typeof dynamicsCRMAuth>): DynamicsCRMClient;
export declare const DynamicsCRMCommon: {
    entityType: (description: string) => import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    recordId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    entityFields: (isCreate?: boolean) => import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
};
//# sourceMappingURL=index.d.ts.map