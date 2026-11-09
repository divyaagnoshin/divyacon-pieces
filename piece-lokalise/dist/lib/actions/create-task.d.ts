export declare const createTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    projectId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    taskTitle: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    taskType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    keys: import("@agnocon/pieces-framework").ArrayProperty<false>;
    languages: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    sourceLanguageIso: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    dueDate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    autoCloseLanguages: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    autoCloseTask: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    closingTags: import("@agnocon/pieces-framework").ArrayProperty<false>;
    doLockTranslations: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    markVerified: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    saveAiTranslationToTm: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    applyAiTm100Matches: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-task.d.ts.map