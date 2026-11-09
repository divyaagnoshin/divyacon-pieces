export declare const textToImage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    prompt: import("@agnocon/pieces-framework").LongTextProperty<true>;
    negative_prompt: import("@agnocon/pieces-framework").LongTextProperty<false>;
    model_id: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    width: import("@agnocon/pieces-framework").NumberProperty<false>;
    height: import("@agnocon/pieces-framework").NumberProperty<false>;
    num_inference_steps: import("@agnocon/pieces-framework").NumberProperty<false>;
    guidance_scale: import("@agnocon/pieces-framework").NumberProperty<false>;
    samples: import("@agnocon/pieces-framework").NumberProperty<false>;
    seed: import("@agnocon/pieces-framework").NumberProperty<false>;
    safety_checker: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=text-to-image.d.ts.map