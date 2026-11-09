import { z } from 'zod';
export declare const ConversationItemSchema: z.ZodObject<{
    id: z.ZodString;
    widget_id: z.ZodString;
    assistant_id: z.ZodString;
    assistant_name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodString>;
    first_message: z.ZodOptional<z.ZodString>;
    device_type: z.ZodOptional<z.ZodString>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    chat_count: z.ZodNumber;
    includes_voice: z.ZodBoolean;
    intent_name: z.ZodOptional<z.ZodString>;
    contact_id: z.ZodString;
    contact_first_name: z.ZodOptional<z.ZodString>;
    contact_last_name: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    widget_type: z.ZodOptional<z.ZodString>;
    widget_provider: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ConversationItem = z.infer<typeof ConversationItemSchema>;
export declare const ContactItemSchema: z.ZodObject<{
    id: z.ZodString;
    first_name: z.ZodOptional<z.ZodString>;
    last_name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    channels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    user_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    last_seen: z.ZodOptional<z.ZodString>;
    last_sent: z.ZodOptional<z.ZodString>;
    org_id: z.ZodOptional<z.ZodString>;
    first_assistant_id: z.ZodOptional<z.ZodString>;
    last_assistant_id: z.ZodOptional<z.ZodString>;
    first_widget_id: z.ZodOptional<z.ZodString>;
    last_widget_id: z.ZodOptional<z.ZodString>;
    custom_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    created_at: z.ZodString;
}, z.core.$strip>;
export type ContactItem = z.infer<typeof ContactItemSchema>;
export declare const FormItemSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone_number: z.ZodOptional<z.ZodString>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, z.core.$catchall<z.ZodAny>>;
export type FormItem = z.infer<typeof FormItemSchema>;
export declare const CapturedFormWebhookSchema: z.ZodObject<{
    id: z.ZodString;
    object: z.ZodLiteral<"event">;
    event: z.ZodLiteral<"captured_form.created">;
    created_at: z.ZodString;
    data: z.ZodObject<{
        captured_form_id: z.ZodString;
        form_id: z.ZodString;
        conversation_id: z.ZodString;
        widget_id: z.ZodString;
        assistant_id: z.ZodString;
        form_name: z.ZodString;
        field_values: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        attributes: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CapturedFormWebhook = z.infer<typeof CapturedFormWebhookSchema>;
export declare const ConversationWebhookSchema: z.ZodObject<{
    id: z.ZodString;
    object: z.ZodLiteral<"event">;
    event: z.ZodLiteral<"conversation.updated">;
    created_at: z.ZodString;
    data: z.ZodObject<{
        conversation_id: z.ZodString;
        widget_id: z.ZodString;
        assistant_id: z.ZodString;
        device_type: z.ZodEnum<{
            mobile: "mobile";
            native: "native";
            desktop: "desktop";
            tablet: "tablet";
            phone: "phone";
        }>;
        contact_id: z.ZodString;
        chat_count: z.ZodNumber;
        transcript: z.ZodArray<z.ZodObject<{
            conversation_id: z.ZodNullable<z.ZodString>;
            sender_type: z.ZodNullable<z.ZodEnum<{
                bot: "bot";
                agent: "agent";
                user: "user";
                tool: "tool";
            }>>;
            message_type: z.ZodNullable<z.ZodEnum<{
                voice: "voice";
                text: "text";
            }>>;
            text: z.ZodString;
            voice_base64: z.ZodNullable<z.ZodString>;
            data_sources: z.ZodNullable<z.ZodArray<z.ZodAny>>;
            id: z.ZodString;
            updated_at: z.ZodNullable<z.ZodString>;
            created_at: z.ZodNullable<z.ZodString>;
            char_count: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        attributes: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ConversationWebhook = z.infer<typeof ConversationWebhookSchema>;
export declare const AssistantItemSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    assistant_type: z.ZodString;
    llm_model: z.ZodString;
}, z.core.$strip>;
export type AssistantItem = z.infer<typeof AssistantItemSchema>;
export declare const WidgetItemSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    display_name: z.ZodOptional<z.ZodString>;
    widget_type: z.ZodString;
    widget_provider: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type WidgetItem = z.infer<typeof WidgetItemSchema>;
export declare const DataSourceItemSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    ds_type: z.ZodString;
}, z.core.$strip>;
export type DataSourceItem = z.infer<typeof DataSourceItemSchema>;
export declare const ApiResponseSchema: z.ZodObject<{
    data: z.ZodOptional<z.ZodObject<{
        items: z.ZodArray<z.ZodAny>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ApiResponse = z.infer<typeof ApiResponseSchema>;
//# sourceMappingURL=schemas.d.ts.map