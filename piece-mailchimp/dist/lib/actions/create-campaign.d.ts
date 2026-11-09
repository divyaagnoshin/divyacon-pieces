export declare const createCampaign: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    campaign_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    list_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    subject_line: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    from_name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    from_email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    reply_to: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    to_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    content_type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    content_url: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    template_id: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    html_content: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=create-campaign.d.ts.map