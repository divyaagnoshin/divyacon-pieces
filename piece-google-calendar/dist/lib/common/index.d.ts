export { googleCalendarAuth, GoogleCalendarAuthValue, getAccessToken, createGoogleClient, googleCalendarScopes } from '../auth';
export declare const googleCalendarCommon: {
    baseUrl: string;
    calendarDropdown: (minAccessRole?: "writer") => import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    eventDropdown: (required?: boolean) => import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]> | import("@agnocon/pieces-framework").DropdownProperty<string, true, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
    colorId: import("@agnocon/pieces-framework").DropdownProperty<string, false, (import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
        serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    }>)[]>;
};
//# sourceMappingURL=index.d.ts.map