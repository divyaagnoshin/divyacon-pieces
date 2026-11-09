export declare const createVideoAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    model: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    image: import("@agnocon/pieces-framework").FileProperty<false, false>;
    lastFrame: import("@agnocon/pieces-framework").FileProperty<false, false>;
    aspectRatio: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    durationSeconds: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    resolution: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    personGeneration: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=create-video.action.d.ts.map