import { AddLeadParams, SendSmsParams, MakePhoneCallParams, CampaignControlParams, DeleteLeadParams, LeadResponse, GetCurrentUserResponse, GenerateAiReplyParams, GenerateAiReplyResponse, CreateConversationParams, CreateConversationResponse, GetConversationParams, GetConversationResponse, SendMessageParams, SendMessageResponse, ListLeadsResponse, UpdateLeadParams, UpdateLeadResponse, CreateCampaignParams, CreateCampaignResponse, ListConversationsParams, ListConversationsResponse, ListCallsParams, ListCallsResponse, GetCallParams, GetCallResponse, DeleteCallParams, DeleteCallResponse, GetWhatsAppSendersParams, GetWhatsAppSendersResponse, GetWhatsAppTemplatesParams, GetWhatsAppTemplatesResponse, SendWhatsAppTemplateParams, SendWhatsAppTemplateResponse, SendWhatsAppFreeformParams, SendWhatsAppFreeformResponse, GetWhatsAppSessionStatusParams, GetWhatsAppSessionStatusResponse, ListAccountPhoneNumbersParams, ListAccountPhoneNumbersResponse, SearchAvailablePhoneNumbersParams, SearchAvailablePhoneNumbersResponse, PurchasePhoneNumberParams, PurchasePhoneNumberResponse, AssistantAssignablePhoneNumber, ListAssistantPhoneNumbersParams, AssistantWebhookMutationResponse } from './types';
export declare const baseApiUrl = "https://app.famulor.de/";
export declare const famulorCommon: {
    baseHeaders: (auth: string) => {
        Authorization: string;
        'Content-Type': string;
        Accept: string;
    };
    addLeadProperties: () => {
        campaign: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
        variables: import("@agnocon/pieces-framework").ObjectProperty<false> | import("@agnocon/pieces-framework").ObjectProperty<true>;
        allow_dupplicate: import("@agnocon/pieces-framework").CheckboxProperty<false>;
        num_secondary_contacts: import("@agnocon/pieces-framework").NumberProperty<false>;
        secondary_contacts: import("@agnocon/pieces-framework").DynamicProperties<false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    };
    sendSmsProperties: () => {
        from: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        to: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
        bodysuit: import("@agnocon/pieces-framework").LongTextProperty<true>;
    };
    makePhoneCallProperties: () => {
        assistant_id: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
        variable: import("@agnocon/pieces-framework").ObjectProperty<false>;
    };
    campaignControlProperties: () => {
        campaign: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        action: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    };
    createCampaignProperties: () => {
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
    deleteLeadProperties: () => {
        lead_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    };
    updateLeadProperties: () => {
        lead_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        campaign: import("@agnocon/pieces-framework").DropdownProperty<any, false, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<any, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
        status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
    };
    getCurrentUserProperties: () => {};
    listLeadsProperties: () => {};
    listAccountPhoneNumbersProperties: () => {};
    searchAvailablePhoneNumbersProperties: () => {
        country_code: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
        contains: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    };
    purchasePhoneNumberProperties: () => {
        phone_number: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    };
    generateAiReplyProperties: () => {
        assistant_id: import("@agnocon/pieces-framework").DropdownProperty<number, true, import("@agnocon/pieces-framework").SecretTextProperty<true>> | import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
        customer_identifier: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
        message: import("@agnocon/pieces-framework").LongTextProperty<true>;
        variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
    };
    createConversationProperties: () => {
        assistant_id: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
        type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
    };
    getConversationProperties: () => {
        uuid: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    };
    sendMessageProperties: () => {
        uuid: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
        message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    };
    listConversationsProperties: () => {
        type: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
        assistant_id: import("@agnocon/pieces-framework").NumberProperty<false>;
        customer_phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        whatsapp_sender_phone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        external_identifier: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
        cursor: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    };
    listCallsProperties: () => {
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
    getCallProperties: () => {
        call_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    };
    deleteCallProperties: () => {
        call_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    };
    getWhatsAppSendersProperties: () => {
        status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    };
    getWhatsAppTemplatesProperties: () => {
        sender_id: import("@agnocon/pieces-framework").NumberProperty<true>;
        status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    };
    sendWhatsAppTemplateProperties: () => {
        sender_id: import("@agnocon/pieces-framework").NumberProperty<true>;
        template_id: import("@agnocon/pieces-framework").NumberProperty<true>;
        recipient_phone: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
        recipient_name: import("@agnocon/pieces-framework").ShortTextProperty<false>;
        variables: import("@agnocon/pieces-framework").ObjectProperty<false>;
    };
    sendWhatsAppFreeformProperties: () => {
        sender_id: import("@agnocon/pieces-framework").NumberProperty<true>;
        recipient_phone: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
        message: import("@agnocon/pieces-framework").LongTextProperty<true>;
    };
    getWhatsAppSessionStatusProperties: () => {
        sender_id: import("@agnocon/pieces-framework").NumberProperty<true>;
        recipient_phone: import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<true>;
    };
    addLeadSchema: {
        campaign: import("zod").ZodNumber;
        phone_number: import("zod").ZodString;
        variables: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>;
        allow_dupplicate: import("zod").ZodOptional<import("zod").ZodBoolean>;
        num_secondary_contacts: import("zod").ZodOptional<import("zod").ZodNumber>;
        secondary_contacts: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>;
    };
    sendSmsSchema: {
        from: import("zod").ZodNumber;
        to: import("zod").ZodString;
        bodysuit: import("zod").ZodString;
    };
    makePhoneCallSchema: {
        assistant_id: import("zod").ZodNumber;
        phone_number: import("zod").ZodString;
        variable: import("zod").ZodOptional<import("zod").ZodObject<{
            customer_name: import("zod").ZodOptional<import("zod").ZodString>;
            email: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod/v4/core").$catchall<import("zod").ZodAny>>>;
    };
    campaignControlSchema: {
        campaign_id: import("zod").ZodNumber;
        action: import("zod").ZodEnum<{
            start: "start";
            stop: "stop";
        }>;
    };
    createCampaignSchema: {
        name: import("zod").ZodString;
        assistant_id: import("zod").ZodNumber;
        timezone: import("zod").ZodOptional<import("zod").ZodString>;
        max_calls_in_parallel: import("zod").ZodOptional<import("zod").ZodNumber>;
        allowed_hours_start_time: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"">, import("zod").ZodString]>>;
        allowed_hours_end_time: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"">, import("zod").ZodString]>>;
        allowed_days: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodEnum<{
            monday: "monday";
            tuesday: "tuesday";
            wednesday: "wednesday";
            thursday: "thursday";
            friday: "friday";
            saturday: "saturday";
            sunday: "sunday";
        }>>>;
        max_retries: import("zod").ZodOptional<import("zod").ZodNumber>;
        retry_interval: import("zod").ZodOptional<import("zod").ZodNumber>;
        retry_on_voicemail: import("zod").ZodOptional<import("zod").ZodBoolean>;
        retry_on_goal_incomplete: import("zod").ZodOptional<import("zod").ZodBoolean>;
        goal_completion_variable: import("zod").ZodOptional<import("zod").ZodString>;
        mark_complete_when_no_leads: import("zod").ZodOptional<import("zod").ZodBoolean>;
        phone_number_ids: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber>>;
    };
    deleteLeadSchema: {
        lead_id: import("zod").ZodNumber;
    };
    updateLeadSchema: {
        lead_id: import("zod").ZodNumber;
        campaign: import("zod").ZodOptional<import("zod").ZodNumber>;
        phone_number: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodString, import("zod").ZodLiteral<"">]>>;
        status: import("zod").ZodOptional<import("zod").ZodEnum<{
            created: "created";
            completed: "completed";
            "reached-max-retries": "reached-max-retries";
        }>>;
        variables: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>;
    };
    getCurrentUserSchema: {};
    listLeadsSchema: {};
    listAccountPhoneNumbersSchema: {};
    searchAvailablePhoneNumbersSchema: {
        country_code: import("zod").ZodEnum<{
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
        contains: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"">, import("zod").ZodString]>>;
    };
    purchasePhoneNumberSchema: {
        phone_number: import("zod").ZodString;
    };
    generateAiReplySchema: {
        assistant_id: import("zod").ZodNumber;
        customer_identifier: import("zod").ZodString;
        message: import("zod").ZodString;
        variables: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>;
    };
    createConversationSchema: {
        assistant_id: import("zod").ZodString;
        type: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEnum<{
            widget: "widget";
            test: "test";
        }>>>;
        variables: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>>;
    };
    getConversationSchema: {
        uuid: import("zod").ZodString;
    };
    sendMessageSchema: {
        uuid: import("zod").ZodString;
        message: import("zod").ZodString;
    };
    listConversationsSchema: {
        type: import("zod").ZodOptional<import("zod").ZodEnum<{
            widget: "widget";
            test: "test";
            whatsapp: "whatsapp";
            api: "api";
        }>>;
        assistant_id: import("zod").ZodOptional<import("zod").ZodNumber>;
        customer_phone: import("zod").ZodOptional<import("zod").ZodString>;
        whatsapp_sender_phone: import("zod").ZodOptional<import("zod").ZodString>;
        external_identifier: import("zod").ZodOptional<import("zod").ZodString>;
        per_page: import("zod").ZodOptional<import("zod").ZodNumber>;
        cursor: import("zod").ZodOptional<import("zod").ZodString>;
    };
    listCallsSchema: {
        status: import("zod").ZodOptional<import("zod").ZodEnum<{
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
        type: import("zod").ZodOptional<import("zod").ZodEnum<{
            inbound: "inbound";
            outbound: "outbound";
            web: "web";
        }>>;
        phone_number: import("zod").ZodOptional<import("zod").ZodString>;
        assistant_id: import("zod").ZodOptional<import("zod").ZodNumber>;
        campaign_id: import("zod").ZodOptional<import("zod").ZodNumber>;
        date_from: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"">, import("zod").ZodString]>>;
        date_to: import("zod").ZodOptional<import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"">, import("zod").ZodString]>>;
        per_page: import("zod").ZodOptional<import("zod").ZodNumber>;
        page: import("zod").ZodOptional<import("zod").ZodNumber>;
    };
    getCallSchema: {
        call_id: import("zod").ZodNumber;
    };
    deleteCallSchema: {
        call_id: import("zod").ZodNumber;
    };
    getWhatsAppSendersSchema: {
        status: import("zod").ZodOptional<import("zod").ZodEnum<{
            online: "online";
            all: "all";
        }>>;
    };
    getWhatsAppTemplatesSchema: {
        sender_id: import("zod").ZodNumber;
        status: import("zod").ZodOptional<import("zod").ZodEnum<{
            all: "all";
            approved: "approved";
        }>>;
    };
    sendWhatsAppTemplateSchema: {
        sender_id: import("zod").ZodNumber;
        template_id: import("zod").ZodNumber;
        recipient_phone: import("zod").ZodString;
        recipient_name: import("zod").ZodOptional<import("zod").ZodString>;
        variables: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
    };
    sendWhatsAppFreeformSchema: {
        sender_id: import("zod").ZodNumber;
        recipient_phone: import("zod").ZodString;
        message: import("zod").ZodString;
    };
    getWhatsAppSessionStatusSchema: {
        sender_id: import("zod").ZodNumber;
        recipient_phone: import("zod").ZodString;
    };
    fetchAllAssistantPages: ({ auth, type, }: {
        auth: string;
        type?: string;
    }) => Promise<any[]>;
    listAllAssistants: ({ auth, per_page, page, type }: {
        auth: string;
        per_page?: number;
        page?: number;
        type?: string;
    }) => Promise<any>;
    listPhoneNumbers: (params: ListAssistantPhoneNumbersParams) => Promise<AssistantAssignablePhoneNumber[]>;
    listAssistants: ({ auth }: {
        auth: string;
    }) => Promise<any>;
    listAccountPhoneNumbers: ({ auth, }: ListAccountPhoneNumbersParams) => Promise<ListAccountPhoneNumbersResponse>;
    searchAvailablePhoneNumbers: (params: SearchAvailablePhoneNumbersParams) => Promise<SearchAvailablePhoneNumbersResponse>;
    purchasePhoneNumber: (params: PurchasePhoneNumberParams) => Promise<PurchasePhoneNumberResponse>;
    listLeads: ({ auth }: {
        auth: string;
    }) => Promise<ListLeadsResponse>;
    listCampaigns: ({ auth }: {
        auth: string;
    }) => Promise<import("./types").Campaign[]>;
    createCampaign: (params: CreateCampaignParams) => Promise<CreateCampaignResponse>;
    addLead: (params: AddLeadParams) => Promise<LeadResponse>;
    sendSms: (params: SendSmsParams) => Promise<any>;
    makePhoneCall: (params: MakePhoneCallParams) => Promise<any>;
    campaignControl: (params: CampaignControlParams) => Promise<any>;
    deleteLead: (params: DeleteLeadParams) => Promise<any>;
    updateLead: (params: UpdateLeadParams) => Promise<UpdateLeadResponse>;
    enableInboundWebhook: ({ auth, assistant_id, webhook_url, }: {
        auth: string;
        assistant_id: number;
        webhook_url: string;
    }) => Promise<AssistantWebhookMutationResponse>;
    disableInboundWebhook: ({ auth, assistant_id, }: {
        auth: string;
        assistant_id: number;
    }) => Promise<AssistantWebhookMutationResponse>;
    enablePostCallWebhook: ({ auth, assistant_id, webhook_url, }: {
        auth: string;
        assistant_id: number;
        webhook_url: string;
    }) => Promise<AssistantWebhookMutationResponse>;
    disablePostCallWebhook: ({ auth, assistant_id, }: {
        auth: string;
        assistant_id: number;
    }) => Promise<AssistantWebhookMutationResponse>;
    enableConversationEndedWebhook: ({ auth, assistant_id, webhook_url, }: {
        auth: string;
        assistant_id: number;
        webhook_url: string;
    }) => Promise<AssistantWebhookMutationResponse>;
    disableConversationEndedWebhook: ({ auth, assistant_id, }: {
        auth: string;
        assistant_id: number;
    }) => Promise<AssistantWebhookMutationResponse>;
    getCurrentUser: ({ auth }: {
        auth: string;
    }) => Promise<GetCurrentUserResponse>;
    generateAiReply: (params: GenerateAiReplyParams) => Promise<GenerateAiReplyResponse>;
    createConversation: (params: CreateConversationParams) => Promise<CreateConversationResponse>;
    getConversation: (params: GetConversationParams) => Promise<GetConversationResponse>;
    sendMessage: (params: SendMessageParams) => Promise<SendMessageResponse>;
    listConversations: (params: ListConversationsParams) => Promise<ListConversationsResponse>;
    listCalls: (params: ListCallsParams) => Promise<ListCallsResponse>;
    getCall: (params: GetCallParams) => Promise<GetCallResponse>;
    deleteCall: (params: DeleteCallParams) => Promise<DeleteCallResponse>;
    getWhatsAppSenders: (params: GetWhatsAppSendersParams) => Promise<GetWhatsAppSendersResponse>;
    getWhatsAppTemplates: (params: GetWhatsAppTemplatesParams) => Promise<GetWhatsAppTemplatesResponse>;
    sendWhatsAppTemplate: (params: SendWhatsAppTemplateParams) => Promise<SendWhatsAppTemplateResponse>;
    sendWhatsAppFreeform: (params: SendWhatsAppFreeformParams) => Promise<SendWhatsAppFreeformResponse>;
    getWhatsAppSessionStatus: (params: GetWhatsAppSessionStatusParams) => Promise<GetWhatsAppSessionStatusResponse>;
};
//# sourceMappingURL=index.d.ts.map