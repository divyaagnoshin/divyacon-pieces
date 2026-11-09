export declare const supportedMediaTypes: string[];
export declare const capitalizeFirstLetter: (word: string) => string;
export declare const mediaTypeSupportsCaption: (type: string) => boolean;
export declare const commonProps: {
    phone_number_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        access_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    message_template_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        access_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    message_template_fields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        access_token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        businessAccountId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
};
//# sourceMappingURL=utils.d.ts.map