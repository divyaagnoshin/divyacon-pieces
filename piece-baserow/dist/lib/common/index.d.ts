import { DynamicPropsValue } from '@agnocon/pieces-framework';
import { BaserowAuthValue } from '../auth';
import { BaserowClient } from './client';
import { BaserowField } from './types';
export declare function makeClient(auth: BaserowAuthValue): Promise<BaserowClient>;
export declare function formatFieldValues(input: DynamicPropsValue, fieldTypeMap: Record<string, string>, options: {
    skipEmpty: boolean;
}): Record<string, unknown>;
export declare function ensureSelectOptionsExist({ fields, payload, client, }: {
    fields: BaserowField[];
    payload: Record<string, unknown>;
    client: BaserowClient;
}): Promise<void>;
export declare const baserowCommon: {
    tableId: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>>;
    rowId: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>>;
    tableFields: (required?: boolean) => import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>> | import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        authType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        apiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        md_token: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        token: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        md_jwt: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
        email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    }>>;
};
//# sourceMappingURL=index.d.ts.map