export declare const createPersonAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    ownerId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    organizationId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    email: import("@agnocon/pieces-framework").ArrayProperty<false>;
    phone: import("@agnocon/pieces-framework").ArrayProperty<false>;
    labelIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    firstName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    lastName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    visibleTo: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    marketing_status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    customfields: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-person.d.ts.map