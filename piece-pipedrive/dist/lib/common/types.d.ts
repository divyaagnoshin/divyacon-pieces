export interface PipedriveDealV2 {
    id: number;
    title: string;
    creator_user_id: number;
    owner_id: number;
    person_id: number | null;
    org_id: number | null;
    stage_id: number;
    pipeline_id: number;
    value: number;
    currency: string;
    add_time: string;
    update_time: string;
    stage_change_time: string;
    is_deleted: boolean;
    status: 'open' | 'won' | 'lost';
    probability: number | null;
    lost_reason: string | null;
    visible_to: number;
    close_time: string | null;
    won_time: string | null;
    first_won_time?: string;
    lost_time: string | null;
    products_count?: number;
    files_count?: number;
    notes_count?: number;
    followers_count?: number;
    email_messages_count?: number;
    activities_count?: number;
    done_activities_count?: number;
    undone_activities_count?: number;
    participants_count?: number;
    expected_close_date: string | null;
    last_incoming_mail_time?: string;
    last_outgoing_mail_time?: string;
    label_ids: number[];
    rotten_time: string | null;
    smart_bcc_email?: string;
    acv?: number;
    arr?: number;
    mrr?: number;
    custom_fields: Record<string, unknown>;
}
export interface PipedriveActivityV2 {
    id: number;
    subject: string;
    owner_id: number;
    type: string;
    is_deleted: boolean;
    done: boolean;
    conference_meeting_client: string | null;
    conference_meeting_url: string | null;
    conference_meeting_id: string | null;
    due_date: string;
    due_time: string;
    duration: string;
    busy: boolean;
    add_time: string;
    update_time: string;
    marked_as_done_time: string | null;
    public_description: string | null;
    location: {
        value: string | null;
        street_number: string | null;
        route: string | null;
        sublocality: string | null;
        locality: string | null;
        admin_area_level_1: string | null;
        admin_area_level_2: string | null;
        country: string | null;
        postal_code: string | null;
        formatted_address: string | null;
    } | null;
    org_id: number | null;
    person_id: number | null;
    deal_id: number | null;
    lead_id: string | null;
    project_id: number | null;
    private: boolean;
    priority: number;
    note: string | null;
    creator_user_id: number;
    attendees?: {
        email_address: string;
        name: string;
        status: string;
        is_organizer: number;
        person_id: number | null;
        user_id: number | null;
    }[];
    participants?: {
        person_id: number;
        primary: boolean;
    }[];
}
export interface PipedrivePersonV2 {
    id: number;
    name: string;
    first_name: string | null;
    last_name: string | null;
    owner_id: number;
    org_id: number | null;
    picture_id: number | null;
    add_time: string;
    update_time: string;
    is_deleted: boolean;
    visible_to: number;
    phones: {
        value: string;
        primary: boolean;
        label: string;
    }[];
    emails: {
        value: string;
        primary: boolean;
        label: string;
    }[];
    label_ids: number[];
    custom_fields: Record<string, unknown>;
    next_activity_id?: number | null;
    last_activity_id?: number | null;
    open_deals_count?: number;
    related_open_deals_count?: number;
    closed_deals_count?: number;
    related_closed_deals_count?: number;
    participant_open_deals_count?: number;
    participant_closed_deals_count?: number;
    email_messages_count?: number;
    activities_count?: number;
    done_activities_count?: number;
    undone_activities_count?: number;
    files_count?: number;
    notes_count?: number;
    followers_count?: number;
    won_deals_count?: number;
    related_won_deals_count?: number;
    lost_deals_count?: number;
    related_lost_deals_count?: number;
    last_incoming_mail_time?: string | null;
    last_outgoing_mail_time?: string | null;
    marketing_status?: string;
    doi_status?: string;
}
export interface PipedriveOrganizationV2 {
    id: number;
    name: string;
    owner_id: number;
    add_time: string;
    update_time: string;
    is_deleted: boolean;
    visible_to: number;
    picture_id: number | null;
    label_ids: number[];
    address: {
        value: string | null;
        street_number: string | null;
        route: string | null;
        sublocality: string | null;
        locality: string | null;
        admin_area_level_1: string | null;
        admin_area_level_2: string | null;
        country: string | null;
        postal_code: string | null;
        formatted_address: string | null;
    } | null;
    custom_fields: Record<string, unknown>;
    next_activity_id?: number | null;
    last_activity_id?: number | null;
    open_deals_count?: number;
    related_open_deals_count?: number;
    closed_deals_count?: number;
    related_closed_deals_count?: number;
    participant_open_deals_count?: number;
    participant_closed_deals_count?: number;
    email_messages_count?: number;
    activities_count?: number;
    done_activities_count?: number;
    undone_activities_count?: number;
    files_count?: number;
    notes_count?: number;
    followers_count?: number;
    won_deals_count?: number;
    related_won_deals_count?: number;
    lost_deals_count?: number;
    related_lost_deals_count?: number;
    last_incoming_mail_time?: string | null;
    last_outgoing_mail_time?: string | null;
    marketing_status?: string;
    doi_status?: string;
}
export interface PipedriveLeadV2 {
    id: string;
    title: string;
    owner_id: number;
    creator_id: number;
    label_ids: string[];
    value: number | null;
    expected_close_date: string | null;
    person_id: number | null;
    organization_id: number | null;
    is_archived: boolean;
    source_name: string;
    origin: string;
    origin_id: string | null;
    channel: number | null;
    channel_id: string | null;
    was_seen: boolean;
    next_activity_id: number | null;
    add_time: string;
    update_time: string;
    visible_to: number;
    custom_fields?: Record<string, unknown>;
}
export interface PipedriveNoteV2 {
    id: number;
    user_id: number;
    deal_id: number | null;
    person_id: number | null;
    org_id: number | null;
    lead_id: string | null;
    content: string;
    add_time: string;
    update_time: string;
    is_deleted: boolean;
    last_update_user_id: number | null;
}
export interface PipedriveProductV2 {
    id: number;
    name: string;
    code: string | null;
    description: string | null;
    unit: string | null;
    tax: number | null;
    prices: Array<{
        id?: number;
        product_id?: number;
        price: number;
        currency: string;
        cost?: number;
        direct_cost?: number;
        overhead_cost?: number;
    }>;
    owner_id: number;
    add_time: string;
    update_time: string;
    is_deleted: boolean;
    visible_to: number;
    custom_fields?: Record<string, unknown>;
}
export type GetField = {
    id: number;
    name: string;
    key: string;
    edit_flag: boolean;
    is_subfield: boolean;
    id_suffix: string;
    field_type: "varchar" | "text" | "enum" | "set" | "varchar_auto" | "double" | "monetary" | "user" | "org" | "people" | "phone" | "time" | "int" | "timerange" | "date" | "daterange" | "address" | "lead_label";
    options?: Array<{
        id: number;
        label: string;
    }>;
};
type PaginationInfoV2 = {
    start?: number;
    limit?: number;
    more_items_in_collection: boolean;
    next_cursor?: string;
};
type AdditionalDataV2 = {
    pagination?: PaginationInfoV2;
};
export type PaginatedV2Response<T> = {
    success: boolean;
    data: T[];
    additional_data?: {
        next_cursor?: string;
    };
};
export type PaginatedV1Response<T> = {
    success: boolean;
    data: T[];
    additional_data: {
        pagination: {
            start: number;
            limit: number;
            more_items_in_collection: boolean;
            next_start: number;
        };
    };
};
export type FieldsResponse = {
    success: boolean;
    data: GetField[];
    additional_data?: AdditionalDataV2;
};
export type StageWithPipelineInfo = {
    id: number;
    name: string;
    pipeline_id: number;
};
export type GetStagesResponse = {
    success: boolean;
    data: StageWithPipelineInfo[];
    additional_data?: AdditionalDataV2;
};
export type ListDealsResponse = {
    success: boolean;
    data: PipedriveDealV2[];
    additional_data?: AdditionalDataV2;
};
export type GetDealResponse = {
    success: boolean;
    data: PipedriveDealV2;
    additional_data?: AdditionalDataV2;
};
export type ListActivitiesResponse = {
    success: boolean;
    data: PipedriveActivityV2[];
    additional_data?: AdditionalDataV2;
};
export type PersonListResponse = {
    success: boolean;
    data: PipedrivePersonV2[];
    additional_data?: AdditionalDataV2;
};
export type GetPersonResponse = {
    success: boolean;
    data: PipedrivePersonV2;
    additional_data?: AdditionalDataV2;
};
export type OrganizationListResponse = {
    success: boolean;
    data: PipedriveOrganizationV2[];
    additional_data?: AdditionalDataV2;
};
export type GetOrganizationResponse = {
    success: boolean;
    data: PipedriveOrganizationV2;
    additional_data?: AdditionalDataV2;
};
export type LeadListResponse = {
    success: boolean;
    data: PipedriveLeadV2[];
    additional_data?: AdditionalDataV2;
};
export type GetLeadResponse = {
    success: boolean;
    data: PipedriveLeadV2;
    additional_data?: AdditionalDataV2;
};
export type GetNoteResponse = {
    success: boolean;
    data: PipedriveNoteV2;
    additional_data?: AdditionalDataV2;
};
export type WebhookCreateResponse = {
    status?: string;
    success: boolean;
    data: {
        id: string;
    };
};
export type GetProductResponse = {
    success: boolean;
    data: PipedriveProductV2;
    additional_data?: AdditionalDataV2;
};
export type RequestParams = Record<string, string | number | boolean | string[] | number[] | null | undefined>;
export {};
//# sourceMappingURL=types.d.ts.map