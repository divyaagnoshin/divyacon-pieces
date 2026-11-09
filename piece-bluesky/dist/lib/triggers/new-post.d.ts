import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newPost: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    searchQuery: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    searchLanguage: {
        displayName: string;
        description: string;
        required: false;
        options: import("@agnocon/pieces-framework").DropdownState<string>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.STATIC_DROPDOWN;
        defaultValue?: unknown;
    };
    includeImages: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeVideos: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    searchQuery: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    searchLanguage: {
        displayName: string;
        description: string;
        required: false;
        options: import("@agnocon/pieces-framework").DropdownState<string>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.STATIC_DROPDOWN;
        defaultValue?: unknown;
    };
    includeImages: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeVideos: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    searchQuery: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    searchLanguage: {
        displayName: string;
        description: string;
        required: false;
        options: import("@agnocon/pieces-framework").DropdownState<string>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.STATIC_DROPDOWN;
        defaultValue?: unknown;
    };
    includeImages: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeVideos: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    pdsHost: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    identifier: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    password: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    searchQuery: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    searchLanguage: {
        displayName: string;
        description: string;
        required: false;
        options: import("@agnocon/pieces-framework").DropdownState<string>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.STATIC_DROPDOWN;
        defaultValue?: unknown;
    };
    includeImages: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    includeVideos: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    sortBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
}>;
//# sourceMappingURL=new-post.d.ts.map