import { HttpMethod, HttpMessageBody, HttpResponse } from '@agnocon/pieces-common';
export declare const BASE_URL = "https://public-api.granola.ai/v1";
export declare function granolaApiCall<T extends HttpMessageBody>({ token, method, path, queryParams, }: {
    token: string;
    method: HttpMethod;
    path: string;
    queryParams?: Record<string, string>;
}): Promise<HttpResponse<T>>;
interface GranolaNote {
    id: string;
    object: string;
    title: string;
    owner: {
        name: string | null;
        email: string;
    };
    created_at: string;
    updated_at: string;
    calendar_event?: {
        event_title: string;
        organiser: string;
        calendar_event_id: string;
        scheduled_start_time: string;
        scheduled_end_time: string;
        invitees?: {
            name: string | null;
            email: string;
        }[];
    };
    attendees?: {
        name: string | null;
        email: string;
    }[];
    folder_membership?: {
        id: string;
        object: string;
        name: string;
    }[];
    summary_text?: string;
    summary_markdown?: string | null;
    transcript?: {
        speaker: {
            source: string;
        };
        text: string;
        start_time: string;
        end_time: string;
    }[];
}
interface GranolaListResponse {
    notes: GranolaNote[];
    hasMore: boolean;
    cursor?: string;
}
declare function flattenNote(note: GranolaNote): {
    id: string;
    title: string;
    owner_name: string | null;
    owner_email: string;
    created_at: string;
    updated_at: string;
    calendar_event_title: string | null;
    calendar_organiser: string | null;
    calendar_event_id: string | null;
    scheduled_start_time: string | null;
    scheduled_end_time: string | null;
    attendees: string | null;
    folders: string | null;
    summary_text: string | null;
    summary_markdown: string | null;
};
declare function flattenNoteWithTranscript(note: GranolaNote): {
    transcript: string | null;
    id: string;
    title: string;
    owner_name: string | null;
    owner_email: string;
    created_at: string;
    updated_at: string;
    calendar_event_title: string | null;
    calendar_organiser: string | null;
    calendar_event_id: string | null;
    scheduled_start_time: string | null;
    scheduled_end_time: string | null;
    attendees: string | null;
    folders: string | null;
    summary_text: string | null;
    summary_markdown: string | null;
};
export { flattenNote, flattenNoteWithTranscript };
export type { GranolaNote, GranolaListResponse };
//# sourceMappingURL=index.d.ts.map