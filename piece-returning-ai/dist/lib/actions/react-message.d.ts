/**
 * This action allows you to react to a specific message as a chosen user in a channel.
 * The reaction will appear as if the selected user added it directly to the message.
 *
 * When using this action, you need to provide:
 * 1. The username or email of the sender (who will appear to have reacted)
 * 2. The ID of the message being reacted to
 * 3. The emoji reaction to add (e.g. :sparkling_heart:)
 *
 * The API will handle adding the reaction appropriately to the message.
 *
 * @example
 * ```
 * // Example response
 * {
 *   "status": "success",
 *   "message": "Reaction added successfully"
 * }
 * ```
 *
 * @link https://dev.returning.ai/api-16179164
 */
export declare const reactMessage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    description: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    messageId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    emoji: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=react-message.d.ts.map