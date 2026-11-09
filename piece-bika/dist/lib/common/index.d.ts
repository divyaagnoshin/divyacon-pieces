import { AppConnectionValueForAuthProperty, PiecePropValueSchema } from '@agnocon/pieces-framework';
import { BikaAuth } from '../auth';
import { BikaClient } from './client';
export declare function makeClient(auth: PiecePropValueSchema<typeof BikaAuth>): BikaClient;
export declare const BikaCommon: {
    space_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    database_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    fields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
};
export declare function createNewFields(auth: AppConnectionValueForAuthProperty<typeof BikaAuth>, space_id: string, database_id: string, fields: Record<string, unknown>): Promise<Record<string, unknown>>;
//# sourceMappingURL=index.d.ts.map