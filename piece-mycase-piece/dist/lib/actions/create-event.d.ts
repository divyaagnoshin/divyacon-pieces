export declare const createEvent: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    start: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    end: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    staff: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    required_staff: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    all_day: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    private: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    location: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    case: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=create-event.d.ts.map