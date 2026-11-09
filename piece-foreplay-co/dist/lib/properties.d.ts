export declare const findAds: () => {
    query: import("@agnocon/pieces-framework").ShortTextProperty<false>;
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
};
export declare const getAdById: () => {
    ad_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
};
export declare const getAdsByPage: () => {
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
};
export declare const findBrands: () => {
    query: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
};
export declare const findBoards: () => {
    offset: import("@agnocon/pieces-framework").NumberProperty<false>;
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
};
export declare const newAdInBoard: () => {
    board_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    polling_interval: import("@agnocon/pieces-framework").NumberProperty<false>;
    live: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    display_format: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    publisher_platform: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    niches: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    market_target: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    languages: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export declare const newAdInSpyder: () => {
    brand_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    polling_interval: import("@agnocon/pieces-framework").NumberProperty<false>;
    live: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    display_format: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    publisher_platform: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    niches: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    market_target: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    languages: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export declare const newSwipefileAd: () => {
    polling_interval: import("@agnocon/pieces-framework").NumberProperty<false>;
    start_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    live: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    display_format: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    publisher_platform: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    niches: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    market_target: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    languages: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
//# sourceMappingURL=properties.d.ts.map