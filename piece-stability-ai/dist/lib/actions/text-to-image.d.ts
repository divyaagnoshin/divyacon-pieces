export declare const textToImage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    api_key: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    prompt: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    cfg_scale: import("@agnocon/pieces-framework").NumberProperty<false>;
    height: import("@agnocon/pieces-framework").NumberProperty<false>;
    width: import("@agnocon/pieces-framework").NumberProperty<false>;
    samples: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    steps: import("@agnocon/pieces-framework").NumberProperty<false>;
    weight: import("@agnocon/pieces-framework").NumberProperty<false>;
    clip_guidance_preset: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    style_preset: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    engine_id: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=text-to-image.d.ts.map