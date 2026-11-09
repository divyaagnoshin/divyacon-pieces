import { StaticPropsValue } from '@agnocon/pieces-framework';
export declare const oracleDbAuth: import("@agnocon/pieces-framework").CustomAuthProperty<{
    connectionType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    host: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    port: import("@agnocon/pieces-framework").NumberProperty<false>;
    serviceName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    connectionString: import("@agnocon/pieces-framework").LongTextProperty<false>;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    thickMode: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
export type OracleDbAuth = StaticPropsValue<typeof oracleDbAuth.props>;
//# sourceMappingURL=auth.d.ts.map