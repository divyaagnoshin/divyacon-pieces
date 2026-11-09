import { TriggerHookContext, TriggerStrategy, SecretTextProperty } from '@agnocon/pieces-framework';
interface ActionPayloadProps {
    unique_identifier?: string;
    invoice_number?: string;
    email?: string;
    amount?: string;
}
export declare const respaidCommon: {
    baseUrl: string;
    getHeadersStructure: (auth: string) => {
        'Content-Type': string;
        Accept: string;
        'X-API-KEY': string;
    };
};
export declare const respaidActionsCommon: {
    getPayloadBodyStructure: (propsValue: ActionPayloadProps) => {
        type: string;
        payload: string;
    };
    validateProps: (propsValue: ActionPayloadProps) => void;
};
export declare const respaidTriggersCommon: {
    onEnable: (eventType: string) => (context: TriggerHookContext<SecretTextProperty<true>, Record<string, never>, TriggerStrategy.WEBHOOK>) => Promise<void>;
    onDisable: (eventType: string) => (context: TriggerHookContext<SecretTextProperty<true>, Record<string, never>, TriggerStrategy.WEBHOOK>) => Promise<void>;
    getPayload: (context: TriggerHookContext<SecretTextProperty<true>, Record<string, never>, TriggerStrategy.WEBHOOK>) => any;
};
export {};
//# sourceMappingURL=index.d.ts.map