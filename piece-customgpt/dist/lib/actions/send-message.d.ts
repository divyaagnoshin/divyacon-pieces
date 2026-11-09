export declare const sendMessage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    project_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    session_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    stream: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    custom_persona: import("@agnocon/pieces-framework").LongTextProperty<false>;
    chatbot_model: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    response_source: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    agent_capability: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    lang: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    custom_context: import("@agnocon/pieces-framework").LongTextProperty<false>;
    file: import("@agnocon/pieces-framework").FileProperty<false, false>;
}>;
//# sourceMappingURL=send-message.d.ts.map