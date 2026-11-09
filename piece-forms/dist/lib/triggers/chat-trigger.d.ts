import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const onChatSubmission: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    about: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    responseMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    botName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    about: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    responseMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    botName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    about: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    responseMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    botName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    about: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    responseMarkdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    botName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>;
//# sourceMappingURL=chat-trigger.d.ts.map