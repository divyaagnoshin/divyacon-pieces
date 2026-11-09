export declare const createImage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    useCase: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    aspectRatio: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customWidth: import("@agnocon/pieces-framework").NumberProperty<false>;
    customHeight: import("@agnocon/pieces-framework").NumberProperty<false>;
    negativePrompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    qualitySettings: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    customSteps: import("@agnocon/pieces-framework").NumberProperty<false>;
    guidanceScale: import("@agnocon/pieces-framework").NumberProperty<false>;
    seed: import("@agnocon/pieces-framework").NumberProperty<false>;
    scheduler: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-image.d.ts.map