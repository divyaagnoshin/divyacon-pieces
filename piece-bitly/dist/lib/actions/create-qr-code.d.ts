export declare const createQrCodeAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    group_guid: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    destination_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    destination: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        accessToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    archived: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    background_color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    dot_pattern_color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    dot_pattern_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    corner_1_shape: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    corner_1_inner_color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    corner_1_outer_color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    corner_2_shape: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    corner_2_inner_color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    corner_2_outer_color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    corner_3_shape: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    corner_3_inner_color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    corner_3_outer_color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    gradient_style: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    gradient_color_1: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    gradient_color_2: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    gradient_angle: import("@agnocon/pieces-framework").NumberProperty<false>;
    gradient_exclude_corners: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    frame_id: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    frame_primary_color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    frame_secondary_color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    frame_background_color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    frame_text: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    logo_image_guid: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    bitly_brand: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    error_correction: import("@agnocon/pieces-framework").StaticDropdownProperty<number, false>;
}>;
//# sourceMappingURL=create-qr-code.d.ts.map