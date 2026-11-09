export * from './schemas';
export * from './constants';
export * from './props';
export * from './requests';
export declare const googleChatCommon: {
    sendMessageSchema: {
        spaceId: import("zod/mini").ZodMiniString<string>;
        text: import("zod/mini").ZodMiniString<string>;
        thread: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        messageReplyOption: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniEnum<{
            REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD: "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD";
            REPLY_MESSAGE_OR_FAIL: "REPLY_MESSAGE_OR_FAIL";
        }>>;
        customMessageId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        isPrivate: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniBoolean<boolean>>;
        privateMessageViewer: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
    };
    getMessageSchema: {
        name: import("zod/mini").ZodMiniString<string>;
    };
    addSpaceMemberSchema: {
        spaceId: import("zod/mini").ZodMiniString<string>;
        personId: import("zod/mini").ZodMiniString<string>;
    };
    findMemberSchema: {
        spaceId: import("zod/mini").ZodMiniString<string>;
        email: import("zod/mini").ZodMiniString<string>;
    };
    searchMessagesSchema: {
        spaceId: import("zod/mini").ZodMiniString<string>;
        keyword: import("zod/mini").ZodMiniString<string>;
        limit: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
    };
    getDirectMessageDetailsSchema: {
        directMessageId: import("zod/mini").ZodMiniString<string>;
    };
    newMessageTriggerSchema: {
        projectId: import("zod/mini").ZodMiniString<string>;
        spaceId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
    };
    newMentionTriggerSchema: {
        projectId: import("zod/mini").ZodMiniString<string>;
        spaceId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        spaceMemberId: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
    };
};
//# sourceMappingURL=index.d.ts.map