export declare const createVideoFromTemplate: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    template_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    template_id: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    lang: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    variables: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    avatar_type: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
    avatar_id: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    voice_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    caption: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    music_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    video_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=create-video-from-template.d.ts.map