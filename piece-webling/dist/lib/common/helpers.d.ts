import { weblingAuth } from '../auth';
import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { CalendarObject, WeblingCalendarEvent, WeblingChanges } from './types';
export declare function callApi<Type>(authProp: AppConnectionValueForAuthProperty<typeof weblingAuth>, request: string): Promise<import("@agnocon/pieces-common").HttpResponse<Type>>;
export declare function getChanges(authProp: AppConnectionValueForAuthProperty<typeof weblingAuth>, lastFetchEpochMS: number): Promise<WeblingChanges>;
export declare function getCalendars(authProp: AppConnectionValueForAuthProperty<typeof weblingAuth>): Promise<CalendarObject[]>;
export declare function getAllEvents(authProp: AppConnectionValueForAuthProperty<typeof weblingAuth>, calendarId: string): Promise<WeblingCalendarEvent[]>;
export declare function getEventsById(authProp: AppConnectionValueForAuthProperty<typeof weblingAuth>, eventIds: string): Promise<WeblingCalendarEvent[]>;
export declare function getUpdatedOrNewEvents(authProp: AppConnectionValueForAuthProperty<typeof weblingAuth>, calendarId: string, lastFetchEpochMS: number): Promise<WeblingCalendarEvent[]>;
//# sourceMappingURL=helpers.d.ts.map