/**
 * @fileoverview YouTube Search action for SerpApi
 * Provides comprehensive YouTube search functionality with quality and duration filters
 */
export declare const youtubeSearch: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    query: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    hl: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    gl: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    no_cache: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    async: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    output: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=youtube-search.d.ts.map