export declare const createTicketAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    orgId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    departmentId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    contactId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<true>;
    email: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    priority: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    category: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    subCategory: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    dueDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    channel: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    assigneeId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    productId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    classification: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    language: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    entitySkills: import("@agnocon/pieces-framework").ArrayProperty<false>;
    customFields: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=create-ticket.d.ts.map