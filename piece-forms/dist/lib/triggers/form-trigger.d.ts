import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const onFormSubmission: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    about: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    response: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    waitForResponse: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    inputs: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    about: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    response: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    waitForResponse: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    inputs: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    about: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    response: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    waitForResponse: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    inputs: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").PieceAuthProperty | undefined, {
    about: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    response: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    waitForResponse: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    inputs: import("@agnocon/pieces-framework").ArrayProperty<true> | import("@agnocon/pieces-framework").ArrayProperty<false>;
}>;
//# sourceMappingURL=form-trigger.d.ts.map