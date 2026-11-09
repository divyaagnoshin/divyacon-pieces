export declare const createCampaignAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    from: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    recipientListNames: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    recipientSegmentNames: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    replyTo: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<"Active" | "Deleted" | "Processing" | "Sending" | "Completed" | "Paused" | "Cancelled" | "Draft", true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    templateName: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
}>;
//# sourceMappingURL=create-campaign.d.ts.map