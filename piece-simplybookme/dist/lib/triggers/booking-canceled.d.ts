import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const bookingCanceled: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    companyLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userLogin: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userPassword: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {}>;
//# sourceMappingURL=booking-canceled.d.ts.map