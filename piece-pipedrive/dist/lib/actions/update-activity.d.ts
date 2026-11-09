export declare const updateActivityAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    organizationId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    personId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    dealId: import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").NumberProperty<true>;
    leadId: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    assignTo: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    type: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    dueDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    dueTime: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    duration: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    isDone: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    busy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    note: import("@agnocon/pieces-framework").LongTextProperty<false>;
    publicDescription: import("@agnocon/pieces-framework").LongTextProperty<false>;
    activityId: import("@agnocon/pieces-framework").NumberProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=update-activity.d.ts.map