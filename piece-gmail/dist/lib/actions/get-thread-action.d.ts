import { GmailMessageFormat } from '../common/models';
export declare const gmailGetThread: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").LongTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>)[], {
    thread_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    format: import("@agnocon/pieces-framework").StaticDropdownProperty<GmailMessageFormat, false> | import("@agnocon/pieces-framework").StaticDropdownProperty<GmailMessageFormat, true>;
}>;
//# sourceMappingURL=get-thread-action.d.ts.map