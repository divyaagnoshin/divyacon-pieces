export declare const createPin: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    ad_account_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    board_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    board_section_id: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    media_source_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    media_url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    link: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    dominant_color: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    alt_text: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    parent_pin_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    sponsor_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    product_tags: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    note: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    is_removable: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-pin.d.ts.map