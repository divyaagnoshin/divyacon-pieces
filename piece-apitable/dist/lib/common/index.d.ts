import { PiecePropValueSchema } from '@agnocon/pieces-framework';
import { APITableAuth } from '../auth';
import { AITableClient } from './client';
export declare function makeClient(auth: PiecePropValueSchema<typeof APITableAuth>): AITableClient;
export declare const APITableCommon: {
    space_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        apiTableUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    datasheet_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        apiTableUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    fields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        apiTableUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
};
export declare function createNewFields(auth: PiecePropValueSchema<typeof APITableAuth>, datasheet_id: string, fields: Record<string, unknown>): Promise<Record<string, unknown>>;
//# sourceMappingURL=index.d.ts.map