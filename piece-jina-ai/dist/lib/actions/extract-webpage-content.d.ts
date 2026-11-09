export declare const extractWebpageContentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    url: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    remove_all_images: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    links_summary: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    images_summary: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    do_not_track: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    iframe_extraction: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    shadow_dom_extraction: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    follow_redirect: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    eu_compliance: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    json_response: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    timeout_seconds: import("@agnocon/pieces-framework").NumberProperty<false>;
    css_selector: import("@agnocon/pieces-framework").LongTextProperty<false>;
    wait_for_selector: import("@agnocon/pieces-framework").LongTextProperty<false>;
    exclude_selector: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=extract-webpage-content.d.ts.map