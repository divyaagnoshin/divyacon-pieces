export declare const saveImageAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    domain: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    license: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    slug: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    image: import("@agnocon/pieces-framework").FileProperty<true, false>;
    alt: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    ext: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    quality: import("@agnocon/pieces-framework").NumberProperty<true>;
    scaleTh: import("@agnocon/pieces-framework").NumberProperty<true>;
    scaleSq: import("@agnocon/pieces-framework").NumberProperty<true>;
    resize: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    lcrop: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    pcrop: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    altMeta: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=save-image.d.ts.map