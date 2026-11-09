export declare const descriptAgentEditAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    mode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    project_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    project_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    team_access: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    composition_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    model: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    callback_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=agent-edit.d.ts.map