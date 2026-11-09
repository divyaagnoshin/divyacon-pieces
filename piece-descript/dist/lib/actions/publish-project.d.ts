export declare const descriptPublishProjectAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    project_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    composition_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    media_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    resolution: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    access_level: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    callback_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=publish-project.d.ts.map