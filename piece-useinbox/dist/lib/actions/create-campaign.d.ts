export declare const createCampaignAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").BasicAuthProperty, {
    senderAccountId: import("@agnocon/pieces-framework").DropdownProperty<string, false, import("@agnocon/pieces-framework").BasicAuthProperty> | import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
    newsletterId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    lists: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, false, import("@agnocon/pieces-framework").BasicAuthProperty> | import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, import("@agnocon/pieces-framework").BasicAuthProperty>;
    plannedTime: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    notifyWhenStart: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    notifyWhenEnd: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=create-campaign.d.ts.map