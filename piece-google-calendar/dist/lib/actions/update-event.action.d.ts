import { ActionContext } from '@agnocon/pieces-framework';
import { calendar_v3 } from '@googleapis/calendar';
import { googleCalendarAuth } from '../common';
export declare const updateEventProps: {
    calendar_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    eventId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    start_date_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end_date_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    location: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    colorId: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    attendees: import("@agnocon/pieces-framework").ArrayProperty<false>;
    guests_can_modify: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    guests_can_invite_others: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    guests_can_see_other_guests: import("@agnocon/pieces-framework").CheckboxProperty<false>;
};
export declare function runUpdateEvent(context: ActionContext<typeof googleCalendarAuth, typeof updateEventProps>): Promise<calendar_v3.Schema$Event>;
export declare const updateEventAction: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    calendar_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    eventId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    title: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    start_date_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end_date_time: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    location: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    colorId: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    attendees: import("@agnocon/pieces-framework").ArrayProperty<false>;
    guests_can_modify: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    guests_can_invite_others: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    guests_can_see_other_guests: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=update-event.action.d.ts.map