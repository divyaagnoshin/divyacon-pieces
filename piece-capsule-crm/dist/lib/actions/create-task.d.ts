export declare const createTaskAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    description: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    dueOn: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    detail: import("@agnocon/pieces-framework").LongTextProperty<false>;
    dueTime: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    linkTo: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    linkedEntityId: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    categoryId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    ownerId: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
}>;
//# sourceMappingURL=create-task.d.ts.map