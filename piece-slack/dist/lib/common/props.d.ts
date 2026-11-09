export declare const multiSelectChannelInfo: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
export declare const singleSelectChannelInfo: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
export declare const appWebhookSetupInfo: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
export declare const interactivitySetupInfo: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
export declare const slackChannel: <R extends boolean>(required: R) => R extends true ? import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[]> : import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[]>;
export declare const username: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const profilePicture: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const iconEmoji: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const threadTs: import("@agnocon/pieces-framework").ShortTextProperty<false>;
export declare const mentionOriginFlow: import("@agnocon/pieces-framework").CheckboxProperty<false>;
export declare const blocks: import("@agnocon/pieces-framework").JsonProperty<false>;
export declare const userId: <R extends boolean>(required: R) => R extends true ? import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[]> : import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[]>;
export declare const userIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[]>;
export declare const usergroupIds: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    botToken: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    userToken: import("@agnocon/pieces-framework").SecretTextProperty<false>;
}>)[]>;
export declare const text: import("@agnocon/pieces-framework").LongTextProperty<true>;
export declare const actions: import("@agnocon/pieces-framework").ArrayProperty<false> | import("@agnocon/pieces-framework").ArrayProperty<true>;
export declare function getChannels(accessToken: string): Promise<{
    label: string;
    value: string;
}[]>;
//# sourceMappingURL=props.d.ts.map