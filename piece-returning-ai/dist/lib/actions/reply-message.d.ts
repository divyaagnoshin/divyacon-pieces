/**
 * This action allows you to reply to a specific message as a chosen user in a channel.
 * The reply will appear as if the selected user posted it directly in response to the original message.
 *
 * When using this action, you need to provide:
 * 1. The username or email of the sender (who will appear to have sent the reply)
 * 2. The ID of the message being replied to
 * 3. The content of the reply message
 *
 * The API will handle threading the reply appropriately in the channel's conversation.
 *
 * @example
 * ```
 * // Example response
 * {
 *   "status": "success",
 *   "message": "Message reply successfully"
 * }
 * ```
 *
 * @link https://dev.returning.ai/api-16179164
 */
export declare const replyMessage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    description: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    messageId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
}>;
//# sourceMappingURL=reply-message.d.ts.map