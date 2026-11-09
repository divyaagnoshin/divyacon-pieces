import { ButtondownEmailStatus, ButtondownEmailType } from '../common/types';
export declare const sendEmail: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    body: import("@agnocon/pieces-framework").LongTextProperty<true>;
    status: import("@agnocon/pieces-framework").StaticDropdownProperty<ButtondownEmailStatus, false>;
    publishDate: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    emailType: import("@agnocon/pieces-framework").StaticDropdownProperty<ButtondownEmailType, false>;
    description: import("@agnocon/pieces-framework").LongTextProperty<false>;
    canonicalUrl: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    image: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    slug: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    metadata: import("@agnocon/pieces-framework").JsonProperty<false>;
    attachments: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
    triggerBilling: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=send-email.d.ts.map