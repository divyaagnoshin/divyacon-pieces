import { TriggerStrategy } from '@agnocon/pieces-framework';
type OrderDirection = 'ASC' | 'DESC';
export declare const newRowTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    port: import("@agnocon/pieces-framework").NumberProperty<false>;
    serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>, {
    description: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    tableName: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        port: import("@agnocon/pieces-framework").NumberProperty<false>;
        serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    }>>;
    orderBy: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        port: import("@agnocon/pieces-framework").NumberProperty<false>;
        serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    }>>;
    orderDirection: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    port: import("@agnocon/pieces-framework").NumberProperty<false>;
    serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>, {
    description: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    tableName: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        port: import("@agnocon/pieces-framework").NumberProperty<false>;
        serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    }>>;
    orderBy: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        port: import("@agnocon/pieces-framework").NumberProperty<false>;
        serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    }>>;
    orderDirection: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    port: import("@agnocon/pieces-framework").NumberProperty<false>;
    serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>, {
    description: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    tableName: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        port: import("@agnocon/pieces-framework").NumberProperty<false>;
        serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    }>>;
    orderBy: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        port: import("@agnocon/pieces-framework").NumberProperty<false>;
        serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    }>>;
    orderDirection: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    port: import("@agnocon/pieces-framework").NumberProperty<false>;
    serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>, {
    description: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    tableName: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        port: import("@agnocon/pieces-framework").NumberProperty<false>;
        serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    }>>;
    orderBy: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        port: import("@agnocon/pieces-framework").NumberProperty<false>;
        serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
        user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    }>>;
    orderDirection: import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<OrderDirection, true>;
}>;
export {};
//# sourceMappingURL=new-row.d.ts.map