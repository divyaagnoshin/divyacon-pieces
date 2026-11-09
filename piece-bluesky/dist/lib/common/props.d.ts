export declare const languageOptions: {
    label: string;
    value: string;
}[];
export declare const languageDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const multiLanguageDropdown: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
export declare const threadDepthDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const parentHeightDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const visibilityDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const moderationLabelDropdown: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
export declare const postUrlProperty: import("@agnocon/pieces-framework").ShortTextProperty<true>;
export declare const userHandleProperty: import("@agnocon/pieces-framework").ShortTextProperty<true>;
export declare const authorSelectionProperty: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").CustomAuthProperty<{
    pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>>;
export declare const postSearchProperty: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const postTextProperty: import("@agnocon/pieces-framework").LongTextProperty<true>;
export declare const imageUrlsProperty: import("@agnocon/pieces-framework").ArrayProperty<false>;
export declare const imageDescriptionsProperty: import("@agnocon/pieces-framework").ArrayProperty<false>;
export declare const linkUrlProperty: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const replyToPostProperty: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const postTypeDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const simpleLanguageDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const replyDepthDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const parentPostsDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare const contentWarningDropdown: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
export declare const audienceDropdown: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
export declare function extractPostInfoFromUrl(url: string): {
    uri?: string;
    handle?: string;
    postId?: string;
};
export declare function normalizeHandle(handle: string): string;
export declare function createSimpleExternalLink(url: string): {
    uri: string;
    title: string;
    description?: string;
};
export declare const postUriProperty: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const externalLinkProperty: import("@agnocon/pieces-framework").ObjectProperty<false>;
export declare const replyToProperty: import("@agnocon/pieces-framework").ObjectProperty<false>;
export declare function parseBlueskyUrl(url: string, agent: any): Promise<string>;
//# sourceMappingURL=props.d.ts.map