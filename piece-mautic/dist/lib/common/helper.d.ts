import { DynamicPropsValue } from '@agnocon/pieces-framework';
export declare const mapMauticToActivepiecesProperty: (type: string, fieldMetadata: {
    displayName: string;
    required: boolean;
}, properties: object) => import("@agnocon/pieces-framework").ShortTextProperty<true> | import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").DateTimeProperty<false> | import("@agnocon/pieces-framework").DateTimeProperty<true> | import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true> | import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<unknown, false> | import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<unknown, true> | import("@agnocon/pieces-framework").StaticDropdownProperty<unknown, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<unknown, true> | null;
export declare const fetchDynamicFieldsFromMetadata: (baseUrl: string, username: string, password: string, type: "contact" | "company" | "lead") => Promise<DynamicPropsValue>;
export declare const getFields: (type: "contact" | "company" | "lead") => import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    base_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    username: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
//# sourceMappingURL=helper.d.ts.map