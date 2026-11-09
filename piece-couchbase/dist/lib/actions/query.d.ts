import { QueryScanConsistency } from 'couchbase';
declare const _default: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    bucket: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    scope: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        connectionString: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    query: import("@agnocon/pieces-framework").LongTextProperty<true>;
    arguments: import("@agnocon/pieces-framework").ArrayProperty<false>;
    vectorFilters: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
    vectorOrder: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    offset: import("@agnocon/pieces-framework").NumberProperty<false>;
    scanConsistency: import("@agnocon/pieces-framework").StaticDropdownProperty<QueryScanConsistency, false>;
    timeout: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
export default _default;
//# sourceMappingURL=query.d.ts.map