export declare const createAssistantRun: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    assistant_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    input: import("@agnocon/pieces-framework").LongTextProperty<true>;
    knowledgeBaseIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    rulesets: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    structures: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    tools: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    thread: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    create_new_thread: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-assistant-run.d.ts.map