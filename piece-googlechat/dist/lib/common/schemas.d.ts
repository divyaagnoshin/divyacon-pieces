import * as z from 'zod/mini';
export declare const sendMessageSchema: {
    spaceId: z.ZodMiniString<string>;
    text: z.ZodMiniString<string>;
    thread: z.ZodMiniOptional<z.ZodMiniString<string>>;
    messageReplyOption: z.ZodMiniOptional<z.ZodMiniEnum<{
        REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD: "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD";
        REPLY_MESSAGE_OR_FAIL: "REPLY_MESSAGE_OR_FAIL";
    }>>;
    customMessageId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    isPrivate: z.ZodMiniOptional<z.ZodMiniBoolean<boolean>>;
    privateMessageViewer: z.ZodMiniOptional<z.ZodMiniString<string>>;
};
export declare const spaceIdSchema: z.ZodMiniString<string>;
export declare const threadIdSchema: z.ZodMiniString<string>;
export declare const userResourceNameSchema: z.ZodMiniString<string>;
export declare const customMessageIdSchema: z.ZodMiniString<string>;
export declare const messageTextSchema: z.ZodMiniString<string>;
export declare const validateSpaceFromDropdown: z.ZodMiniObject<{
    value: z.ZodMiniString<string>;
    label: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export declare const validateThreadFromDropdown: z.ZodMiniObject<{
    value: z.ZodMiniUnion<readonly [z.ZodMiniLiteral<"">, z.ZodMiniString<string>]>;
    label: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export declare const validateUserFromDropdown: z.ZodMiniObject<{
    value: z.ZodMiniString<string>;
    label: z.ZodMiniString<string>;
}, z.z.core.$strip>;
export declare const getMessageSchema: {
    name: z.ZodMiniString<string>;
};
export declare const addSpaceMemberSchema: {
    spaceId: z.ZodMiniString<string>;
    personId: z.ZodMiniString<string>;
};
export declare const findMemberSchema: {
    spaceId: z.ZodMiniString<string>;
    email: z.ZodMiniString<string>;
};
export declare const searchMessagesSchema: {
    spaceId: z.ZodMiniString<string>;
    keyword: z.ZodMiniString<string>;
    limit: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
};
export declare const getDirectMessageDetailsSchema: {
    directMessageId: z.ZodMiniString<string>;
};
export declare const newMessageTriggerSchema: {
    projectId: z.ZodMiniString<string>;
    spaceId: z.ZodMiniOptional<z.ZodMiniString<string>>;
};
export declare const newMentionTriggerSchema: {
    projectId: z.ZodMiniString<string>;
    spaceId: z.ZodMiniOptional<z.ZodMiniString<string>>;
    spaceMemberId: z.ZodMiniOptional<z.ZodMiniString<string>>;
};
//# sourceMappingURL=schemas.d.ts.map