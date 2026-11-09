/**
 * This action allows you to send messages to any accessible channel as a specific user.
 * The message will appear as if the selected user posted it directly.
 *
 * When using this action, you need to provide:
 * 1. The username or email of the sender (who will appear to have sent the message)
 * 2. The channel where the message will be posted
 * 3. The content of the message
 *
 * The API will handle posting the message to the specified channel with the appropriate sender.
 *
 * @example
 * ```
 * // Example response
 * {
 *   "status": "success",
 *   "message": "Message sent successfully"
 * }
 * ```
 *
 * @link https://dev.returning.ai/api-15023884
 */
export declare const sendMessage: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    description: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    user: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    channel: import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    dynamicFields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    message: import("@agnocon/pieces-framework").LongTextProperty<false>;
    images: import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=send-message.d.ts.map