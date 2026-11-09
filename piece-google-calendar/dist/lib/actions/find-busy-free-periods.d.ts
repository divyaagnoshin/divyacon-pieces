import { ActionContext } from '@agnocon/pieces-framework';
import { googleCalendarAuth } from '../common';
interface FreeBusyResponse {
    kind: 'calendar#freeBusy';
    timeMin: string;
    timeMax: string;
    calendars: {
        [calendarId: string]: {
            busy: {
                start: string;
                end: string;
            }[];
            errors?: {
                domain: string;
                reason: string;
            }[];
        };
    };
}
export declare const findFreeBusyProps: {
    calendar_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    start_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    end_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
};
export declare function runFindFreeBusy(context: ActionContext<typeof googleCalendarAuth, typeof findFreeBusyProps>): Promise<FreeBusyResponse>;
export declare const findFreeBusy: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    calendar_ids: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    start_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
    end_date: import("@agnocon/pieces-framework").DateTimeProperty<true>;
}>;
export {};
//# sourceMappingURL=find-busy-free-periods.d.ts.map