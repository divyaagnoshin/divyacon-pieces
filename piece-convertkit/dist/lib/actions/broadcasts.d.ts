export declare const listBroadcasts: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
export declare const createBroadcast: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    content: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emailAddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emailLayoutTemplate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    isPublic: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    publishedAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    sendAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    thumbnailAlt: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    thumbnailUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
export declare const getBroadcastById: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    broadcastId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const updateBroadcast: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    broadcastId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    content: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emailAddress: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    emailLayoutTemplate: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    isPublic: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    publishedAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    sendAt: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    thumbnailAlt: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    thumbnailUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
export declare const broadcastStats: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    broadcastId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
export declare const deleteBroadcast: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    broadcastId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=broadcasts.d.ts.map