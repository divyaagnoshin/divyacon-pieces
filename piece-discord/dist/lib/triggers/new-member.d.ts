import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newMember: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    guildId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    guildId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    guildId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    limit: import("@agnocon/pieces-framework").NumberProperty<false>;
    guildId: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=new-member.d.ts.map