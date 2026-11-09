export declare const getAdsByPage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    page_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    start_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    order: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    live: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    display_format: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    publisher_platform: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    niches: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    market_target: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    languages: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    cursor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=get-ads-by-page.d.ts.map