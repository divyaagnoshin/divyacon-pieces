export interface KnackGetObjectResponse {
    object: {
        fields: {
            type: string;
            key: string;
            name: string;
            format: {
                type: string;
                options: string[];
            };
        }[];
    };
}
export declare const objectDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    applicationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>>;
export declare const fieldIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    applicationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>>;
export declare const recordFields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    applicationId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>>;
export declare function knackTransformFields(objectDetails: KnackGetObjectResponse, recordFields: Record<string, any>): Record<string, any>;
//# sourceMappingURL=props.d.ts.map