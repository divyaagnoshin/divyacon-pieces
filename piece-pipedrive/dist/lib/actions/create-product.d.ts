export declare const createProductAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    code: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    unit: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    tax: import("@agnocon/pieces-framework").NumberProperty<false>;
    isActive: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    ownerId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    currency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    price: import("@agnocon/pieces-framework").NumberProperty<false>;
    cost: import("@agnocon/pieces-framework").NumberProperty<false>;
    overheadCost: import("@agnocon/pieces-framework").NumberProperty<false>;
    visibleTo: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    customfields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=create-product.d.ts.map