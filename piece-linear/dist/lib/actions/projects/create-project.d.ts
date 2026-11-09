export declare const linearCreateProject: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    team_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    icon: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    startDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    targetDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    state: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=create-project.d.ts.map