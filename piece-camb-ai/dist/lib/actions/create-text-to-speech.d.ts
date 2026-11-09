export declare const createTextToSpeech: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
    language: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    voice_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    gender: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    age: import("@agnocon/pieces-framework").NumberProperty<false>;
    project_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    project_description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    folder_id: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=create-text-to-speech.d.ts.map