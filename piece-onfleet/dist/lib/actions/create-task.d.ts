export declare const createTask: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    merchant: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    executor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    destination: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    unparsedDestination: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    recipient: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    useRecipientID: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    completeAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    completeBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    pickupTask: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    quantity: import("@agnocon/pieces-framework").NumberProperty<false>;
    recipientName: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    recipientNotes: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    recipientSkipSMSNotifications: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    serviceTime: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=create-task.d.ts.map