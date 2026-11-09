export declare const askSpace: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    spaceId: import("@agnocon/pieces-framework").DropdownProperty<{
        name: string;
        uuid: string;
    }, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    chatId: import("@agnocon/pieces-framework").DropdownProperty<{
        name: string;
        uuid: string;
    }, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    selectedMode: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    isReasoning: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    text: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>;
//# sourceMappingURL=ask-space.d.ts.map