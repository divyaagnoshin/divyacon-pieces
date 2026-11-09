import { GoogleCalendarAuthValue } from '.';
import { GoogleWatchResponse, CalendarObject, GoogleCalendarEvent, GetColorsResponse } from './types';
export declare function stopWatchEvent(body: GoogleWatchResponse, authProp: GoogleCalendarAuthValue): Promise<void>;
export declare function watchEvent(calendarId: string, webhookUrl: string, authProp: GoogleCalendarAuthValue): Promise<GoogleWatchResponse>;
export declare function getInitialSyncToken({ calendarId, authProp, }: {
    calendarId: string;
    authProp: GoogleCalendarAuthValue;
}): Promise<string | undefined>;
export declare function listEventsWithSyncToken({ calendarId, syncToken, authProp, }: {
    calendarId: string;
    syncToken: string;
    authProp: GoogleCalendarAuthValue;
}): Promise<{
    items: GoogleCalendarEvent[];
    nextSyncToken: string | undefined;
    syncTokenInvalid: boolean;
}>;
export declare function getCalendars(authProp: GoogleCalendarAuthValue, minAccessRole?: 'writer'): Promise<CalendarObject[]>;
export declare function getColors(authProp: GoogleCalendarAuthValue): Promise<GetColorsResponse>;
export declare function getEvents(calendarId: string, expandRecurringEvent: boolean, authProp: GoogleCalendarAuthValue, minUpdated?: Date): Promise<GoogleCalendarEvent[]>;
export declare function getLatestEvent(calendarId: string, authProp: GoogleCalendarAuthValue): Promise<GoogleCalendarEvent>;
export declare function getEventsForDropdown(authProp: GoogleCalendarAuthValue, calendarId?: string, maxResults?: number): Promise<{
    label: string;
    value: string;
}[]>;
//# sourceMappingURL=helper.d.ts.map