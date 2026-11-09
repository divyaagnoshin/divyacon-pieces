export declare const createDiscountAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    enabled: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    auto: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    unlimited: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    selfDestruct: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    applyOnce: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    amount: import("@agnocon/pieces-framework").NumberProperty<true>;
    target: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    stopDate: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    optional: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    targetPids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
        domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    targetAmount: import("@agnocon/pieces-framework").NumberProperty<false>;
    targetQuantity: import("@agnocon/pieces-framework").NumberProperty<false>;
    allowance: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=create-discount.d.ts.map