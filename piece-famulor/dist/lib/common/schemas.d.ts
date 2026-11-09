import z from 'zod';
export declare const addLead: {
    campaign: z.ZodNumber;
    phone_number: z.ZodString;
    variables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    allow_dupplicate: z.ZodOptional<z.ZodBoolean>;
    num_secondary_contacts: z.ZodOptional<z.ZodNumber>;
    secondary_contacts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
};
export declare const sendSms: {
    from: z.ZodNumber;
    to: z.ZodString;
    bodysuit: z.ZodString;
};
export declare const makePhoneCall: {
    assistant_id: z.ZodNumber;
    phone_number: z.ZodString;
    variable: z.ZodOptional<z.ZodObject<{
        customer_name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
    }, z.core.$catchall<z.ZodAny>>>;
};
export declare const campaignControl: {
    campaign_id: z.ZodNumber;
    action: z.ZodEnum<{
        start: "start";
        stop: "stop";
    }>;
};
export declare const createCampaign: {
    name: z.ZodString;
    assistant_id: z.ZodNumber;
    timezone: z.ZodOptional<z.ZodString>;
    max_calls_in_parallel: z.ZodOptional<z.ZodNumber>;
    allowed_hours_start_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>;
    allowed_hours_end_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>;
    allowed_days: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        monday: "monday";
        tuesday: "tuesday";
        wednesday: "wednesday";
        thursday: "thursday";
        friday: "friday";
        saturday: "saturday";
        sunday: "sunday";
    }>>>;
    max_retries: z.ZodOptional<z.ZodNumber>;
    retry_interval: z.ZodOptional<z.ZodNumber>;
    retry_on_voicemail: z.ZodOptional<z.ZodBoolean>;
    retry_on_goal_incomplete: z.ZodOptional<z.ZodBoolean>;
    goal_completion_variable: z.ZodOptional<z.ZodString>;
    mark_complete_when_no_leads: z.ZodOptional<z.ZodBoolean>;
    phone_number_ids: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
};
export declare const deleteLead: {
    lead_id: z.ZodNumber;
};
export declare const updateLead: {
    lead_id: z.ZodNumber;
    campaign: z.ZodOptional<z.ZodNumber>;
    phone_number: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<"">]>>;
    status: z.ZodOptional<z.ZodEnum<{
        created: "created";
        completed: "completed";
        "reached-max-retries": "reached-max-retries";
    }>>;
    variables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
};
export declare const getCurrentUser: {};
export declare const listLeads: {};
export declare const listAccountPhoneNumbers: {};
export declare const searchAvailablePhoneNumbers: {
    country_code: z.ZodEnum<{
        DE: "DE";
        US: "US";
        CA: "CA";
        GB: "GB";
        AU: "AU";
        IL: "IL";
        PL: "PL";
        FI: "FI";
        NL: "NL";
        DK: "DK";
        IT: "IT";
    }>;
    contains: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>;
};
export declare const purchasePhoneNumber: {
    phone_number: z.ZodString;
};
export declare const generateAiReply: {
    assistant_id: z.ZodNumber;
    customer_identifier: z.ZodString;
    message: z.ZodString;
    variables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
};
export declare const createConversation: {
    assistant_id: z.ZodString;
    type: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        widget: "widget";
        test: "test";
    }>>>;
    variables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
};
export declare const getConversation: {
    uuid: z.ZodString;
};
export declare const sendMessage: {
    uuid: z.ZodString;
    message: z.ZodString;
};
export declare const listConversations: {
    type: z.ZodOptional<z.ZodEnum<{
        widget: "widget";
        test: "test";
        whatsapp: "whatsapp";
        api: "api";
    }>>;
    assistant_id: z.ZodOptional<z.ZodNumber>;
    customer_phone: z.ZodOptional<z.ZodString>;
    whatsapp_sender_phone: z.ZodOptional<z.ZodString>;
    external_identifier: z.ZodOptional<z.ZodString>;
    per_page: z.ZodOptional<z.ZodNumber>;
    cursor: z.ZodOptional<z.ZodString>;
};
export declare const listCalls: {
    status: z.ZodOptional<z.ZodEnum<{
        completed: "completed";
        initiated: "initiated";
        ringing: "ringing";
        busy: "busy";
        "in-progress": "in-progress";
        ended: "ended";
        ended_by_customer: "ended_by_customer";
        ended_by_assistant: "ended_by_assistant";
        "no-answer": "no-answer";
        failed: "failed";
    }>>;
    type: z.ZodOptional<z.ZodEnum<{
        inbound: "inbound";
        outbound: "outbound";
        web: "web";
    }>>;
    phone_number: z.ZodOptional<z.ZodString>;
    assistant_id: z.ZodOptional<z.ZodNumber>;
    campaign_id: z.ZodOptional<z.ZodNumber>;
    date_from: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>;
    date_to: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<"">, z.ZodString]>>;
    per_page: z.ZodOptional<z.ZodNumber>;
    page: z.ZodOptional<z.ZodNumber>;
};
export declare const getCall: {
    call_id: z.ZodNumber;
};
export declare const deleteCall: {
    call_id: z.ZodNumber;
};
export declare const getWhatsAppSenders: {
    status: z.ZodOptional<z.ZodEnum<{
        online: "online";
        all: "all";
    }>>;
};
export declare const getWhatsAppTemplates: {
    sender_id: z.ZodNumber;
    status: z.ZodOptional<z.ZodEnum<{
        all: "all";
        approved: "approved";
    }>>;
};
export declare const sendWhatsAppTemplate: {
    sender_id: z.ZodNumber;
    template_id: z.ZodNumber;
    recipient_phone: z.ZodString;
    recipient_name: z.ZodOptional<z.ZodString>;
    variables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
};
export declare const sendWhatsAppFreeform: {
    sender_id: z.ZodNumber;
    recipient_phone: z.ZodString;
    message: z.ZodString;
};
export declare const getWhatsAppSessionStatus: {
    sender_id: z.ZodNumber;
    recipient_phone: z.ZodString;
};
//# sourceMappingURL=schemas.d.ts.map