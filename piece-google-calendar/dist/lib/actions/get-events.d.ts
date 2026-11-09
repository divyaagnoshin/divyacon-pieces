import { ActionContext } from '@agnocon/pieces-framework';
import { googleCalendarAuth } from '../common';
export declare const getEventsProps: {
    calendar_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    event_types: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
    search: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    start_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    singleEvents: import("@agnocon/pieces-framework").CheckboxProperty<true>;
};
export declare function runGetEvents(context: ActionContext<typeof googleCalendarAuth, typeof getEventsProps>): Promise<import("@agnocon/pieces-common").HttpResponse<any>>;
export declare const getEvents: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    calendar_id: import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    event_types: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, true>;
    search: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    start_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    end_date: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    singleEvents: import("@agnocon/pieces-framework").CheckboxProperty<true>;
}>;
//# sourceMappingURL=get-events.d.ts.map