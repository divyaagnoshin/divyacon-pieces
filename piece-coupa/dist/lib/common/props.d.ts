import { CoupaModule } from './utils';
export declare const COUPA_MODULE_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const moduleProperty: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
export declare const customModuleResourceProperty: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const objectIdProperty: import("@agnocon/pieces-framework").NumberProperty<true>;
export declare const requestBodyProperty: import("@agnocon/pieces-framework").JsonProperty<true>;
export declare const requestBodyHelp: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
export declare const optionalQueryParamsProperty: import("@agnocon/pieces-framework").JsonProperty<false>;
export declare const purchaseOrderDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>>;
export declare const contractDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>>;
export declare const supplierDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>>;
export declare const pendingApprovalDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>>;
export declare const objectSelector: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    instanceUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    clientId: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    clientSecret: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    scope: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>>;
export declare const attachmentModuleProperty: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
export declare const remitToParentTypeProperty: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
export declare function resolveModuleResource(module: string | undefined, customResource: string | undefined): string;
export declare function toCoupaModule(module: string): CoupaModule;
export declare function parseOptionalQuery(queryJson: unknown): Record<string, string | number | boolean | undefined>;
//# sourceMappingURL=props.d.ts.map