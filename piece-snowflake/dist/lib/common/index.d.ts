import { DropdownState } from '@agnocon/pieces-framework';
import { AppConnectionType } from '@agnocon/pieces-framework';
import snowflake from 'snowflake-sdk';
export type SnowflakeAuthValue = {
    type: AppConnectionType.OAUTH2;
    access_token: string;
    props: {
        account: string;
        database?: string;
        warehouse?: string;
        role?: string;
    };
} | {
    type: AppConnectionType.CUSTOM_AUTH;
    props: {
        account: string;
        username: string;
        password?: string;
        privateKey?: string;
        privateKeyPassphrase?: string;
        database?: string;
        role?: string;
        warehouse?: string;
    };
};
export declare function configureConnection(auth: SnowflakeAuthValue, application?: string, timeout?: number): snowflake.Connection;
export declare function connect(conn: snowflake.Connection): Promise<void>;
export declare function destroy(conn: snowflake.Connection): Promise<void>;
export declare function execute(conn: snowflake.Connection, sqlText: string, binds: snowflake.Binds): Promise<any[] | undefined>;
export declare const snowflakeCommonProps: {
    database: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        account: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        privateKeyPassphrase: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        role: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        warehouse: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    schema: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        account: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        privateKeyPassphrase: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        role: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        warehouse: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    table: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        account: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        privateKeyPassphrase: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        role: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        warehouse: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    warehouse: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        account: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        privateKeyPassphrase: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        role: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        warehouse: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    table_column_values: import("@agnocon/pieces-framework").DynamicProperties<true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        account: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        privateKeyPassphrase: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        role: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        warehouse: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    table_update_values: import("@agnocon/pieces-framework").DynamicProperties<true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        account: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        privateKeyPassphrase: import("@agnocon/pieces-framework").SecretTextProperty<false>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        role: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        warehouse: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
};
export declare function getTableColumnOptions(auth: SnowflakeAuthValue, table: string): Promise<DropdownState<string>>;
//# sourceMappingURL=index.d.ts.map