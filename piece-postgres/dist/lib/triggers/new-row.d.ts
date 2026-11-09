import { TriggerStrategy } from '@agnocon/pieces-framework';
type OrderDirection = 'ASC' | 'DESC';
export declare const newRow: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>, {
    description: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    table: import("@agnocon/pieces-framework").DropdownProperty<{
        table_schema: any;
        table_name: any;
    }, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
    }>>;
    order_by: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
    }>>;
    order_direction: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>, {
    description: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    table: import("@agnocon/pieces-framework").DropdownProperty<{
        table_schema: any;
        table_name: any;
    }, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
    }>>;
    order_by: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
    }>>;
    order_direction: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>, {
    description: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    table: import("@agnocon/pieces-framework").DropdownProperty<{
        table_schema: any;
        table_name: any;
    }, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
    }>>;
    order_by: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
    }>>;
    order_direction: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    port: import("@agnocon/pieces-framework").NumberProperty<true>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>, {
    description: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    table: import("@agnocon/pieces-framework").DropdownProperty<{
        table_schema: any;
        table_name: any;
    }, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
    }>>;
    order_by: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        host: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        port: import("@agnocon/pieces-framework").NumberProperty<true>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        database: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        enable_ssl: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        reject_unauthorized: import("@agnocon/pieces-framework").CheckboxProperty<true>;
        certificate: import("@agnocon/pieces-framework").LongTextProperty<false>;
    }>>;
    order_direction: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, true>;
}>;
export {};
//# sourceMappingURL=new-row.d.ts.map