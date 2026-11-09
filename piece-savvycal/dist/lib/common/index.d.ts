import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
import { DropdownOption } from '@agnocon/pieces-framework';
export declare const SAVVYCAL_BASE_URL = "https://api.savvycal.com/v1";
export declare function verifyWebhookSignature(secret: string, signatureHeader: string, rawBody: unknown): boolean;
export declare function savvyCalApiCall<T extends HttpMessageBody>({ token, method, path, body, queryParams, }: {
    token: string;
    method: HttpMethod;
    path: string;
    body?: unknown;
    queryParams?: Record<string, string>;
}): Promise<HttpResponse<T>>;
export declare function savvyCalPaginatedCall<T>({ token, path, queryParams, }: {
    token: string;
    path: string;
    queryParams?: Record<string, string>;
}): Promise<T[]>;
export declare function buildTeamOptions(token: string): Promise<DropdownOption<string>[]>;
export declare function buildWorkflowOptions(token: string): Promise<DropdownOption<string>[]>;
export declare function buildLinkOptions(token: string, teamId?: string | null): Promise<DropdownOption<string>[]>;
export declare function flattenLink(link: SavvyCalSchedulingLink): Record<string, unknown>;
export declare function flattenEvent(event: SavvyCalEvent): Record<string, unknown>;
export interface SavvyCalAttendee {
    id: string;
    first_name: string | null;
    last_name: string | null;
    display_name: string | null;
    email: string;
    phone_number: string | null;
    time_zone: string | null;
    is_organizer: boolean;
    response_status: string | null;
}
export interface SavvyCalEvent {
    id: string;
    uuid: string | null;
    summary: string | null;
    description: string | null;
    duration: number;
    start_at: string;
    end_at: string;
    state: string;
    url: string | null;
    created_at: string;
    canceled_at: string | null;
    cancel_reason: string | null;
    rescheduled_at: string | null;
    reschedule_reason: string | null;
    original_start_at: string | null;
    original_end_at: string | null;
    is_group_session: boolean;
    location: string | null;
    attendees: SavvyCalAttendee[];
    conferencing: {
        type: string | null;
        join_url: string | null;
        meeting_id: string | null;
    } | null;
    link: {
        id: string;
        name: string;
        slug: string;
    } | null;
    payment: {
        state: string;
        amount_total: number | null;
    } | null;
}
export interface SavvyCalScope {
    id: string;
    name: string;
    slug: string;
}
export interface SavvyCalLinkFieldOption {
    id?: string;
    label?: string;
    name?: string;
    value?: string;
}
export interface SavvyCalLinkField {
    id: string;
    label: string;
    type: string;
    is_required?: boolean;
    options?: SavvyCalLinkFieldOption[] | string[];
    choices?: SavvyCalLinkFieldOption[] | string[];
}
export interface SavvyCalSchedulingLink {
    id: string;
    name: string;
    slug: string;
    url: string;
    active: boolean;
    duration: number | null;
    created_at: string;
    updated_at: string;
    scope: SavvyCalScope | null;
    fields?: SavvyCalLinkField[];
}
//# sourceMappingURL=index.d.ts.map