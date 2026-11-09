import { ActionContext } from '@agnocon/pieces-framework';
import { googleCalendarAuth } from '../common';
import { GoogleCalendarEvent } from '../common/types';
export declare const getEventByIdProps: {
    calendar_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    event_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    max_attendees: import("@agnocon/pieces-framework").NumberProperty<false>;
    time_zone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
};
export declare function runGetEventById(context: ActionContext<typeof googleCalendarAuth, typeof getEventByIdProps>): Promise<GoogleCalendarEvent>;
export declare const getEventById: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    calendar_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    event_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    max_attendees: import("@agnocon/pieces-framework").NumberProperty<false>;
    time_zone: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>;
//# sourceMappingURL=get-event-by-id.d.ts.map