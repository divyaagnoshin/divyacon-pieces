export declare const uploadVideo: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    videoUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    privacy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    password: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    allowEmbed: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    allowDownload: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    contentRating: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    folderId: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    language: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    license: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=upload-video.d.ts.map