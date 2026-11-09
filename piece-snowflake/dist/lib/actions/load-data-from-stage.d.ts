export declare const loadDataFromStageAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    account: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKey: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    privateKeyPassphrase: import("@agnocon/pieces-framework").SecretTextProperty<false>;
    database: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    role: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    warehouse: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
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
    stage_path: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    file_format_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    file_pattern: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    skip_header: import("@agnocon/pieces-framework").NumberProperty<false>;
    error_on_column_count_mismatch: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    on_error: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=load-data-from-stage.d.ts.map