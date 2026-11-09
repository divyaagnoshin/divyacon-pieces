export declare function customPropertiesProp(entityType: CustomPropertyEntity): import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiSecret: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>>;
export declare function mergeCustomProperties<T extends Record<string, unknown>>(entity: T, customProps: Record<string, unknown> | undefined | null): T;
export type CustomPropertyEntity = 'Account' | 'Person' | 'Deal';
//# sourceMappingURL=custom-properties.d.ts.map