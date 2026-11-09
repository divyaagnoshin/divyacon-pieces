export declare const addLead: () => {
    campaign: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false> | import("@agnocon/pieces-framework").ObjectProperty<true>;
    allow_dupplicate: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    num_secondary_contacts: import("@agnocon/pieces-framework").NumberProperty<false>;
    secondary_contacts: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export declare const sendSms: () => {
    from: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    bodysuit: import("@agnocon/pieces-framework").LongTextProperty<true>;
};
export declare const createCampaign: () => {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    assistant_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    timezone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    max_calls_in_parallel: import("@agnocon/pieces-framework").NumberProperty<false>;
    allowed_hours_start_time: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    allowed_hours_end_time: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    allowed_days: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    max_retries: import("@agnocon/pieces-framework").NumberProperty<false>;
    retry_interval: import("@agnocon/pieces-framework").NumberProperty<false>;
    retry_on_voicemail: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    retry_on_goal_incomplete: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    goal_completion_variable: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    mark_complete_when_no_leads: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    phone_number_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export declare const makePhoneCall: () => {
    assistant_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    variable: import("@agnocon/pieces-framework").ObjectProperty<false>;
};
export declare const campaignControl: () => {
    campaign: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    action: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
};
export declare const deleteLead: () => {
    lead_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
};
export declare const updateLead: () => {
    lead_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    campaign: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
};
export declare const getCurrentUser: () => {};
export declare const listLeads: () => {};
export declare const listAccountPhoneNumbers: () => {};
export declare const searchAvailablePhoneNumbers: () => {
    country_code: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    contains: import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
export declare const purchasePhoneNumber: () => {
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
};
export declare const generateAiReply: () => {
    assistant_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    customer_identifier: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
};
export declare const createConversation: () => {
    assistant_id: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
};
export declare const getConversation: () => {
    uuid: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
};
export declare const sendMessage: () => {
    uuid: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
};
export declare const listConversations: () => {
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    assistant_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    customer_phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    whatsapp_sender_phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    external_identifier: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    cursor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
export declare const listCalls: () => {
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    assistant_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    campaign_id: import("@agnocon/pieces-framework").NumberProperty<false>;
    date_from: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    date_to: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    page: import("@agnocon/pieces-framework").NumberProperty<false>;
};
export declare const getCall: () => {
    call_id: import("@agnocon/pieces-framework").NumberProperty<true>;
};
export declare const deleteCall: () => {
    call_id: import("@agnocon/pieces-framework").NumberProperty<true>;
};
export declare const getWhatsAppSenders: () => {
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
};
export declare const getWhatsAppTemplates: () => {
    sender_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
};
export declare const sendWhatsAppTemplate: () => {
    sender_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    template_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    recipient_phone: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    recipient_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
};
export declare const sendWhatsAppFreeform: () => {
    sender_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    recipient_phone: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<true>;
};
export declare const getWhatsAppSessionStatus: () => {
    sender_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    recipient_phone: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
};
//# sourceMappingURL=properties.d.ts.map