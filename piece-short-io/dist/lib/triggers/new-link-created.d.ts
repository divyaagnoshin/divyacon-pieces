import { TriggerStrategy } from '@agnocon/pieces-framework';
export declare const newLinkCreatedTrigger: import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    domain: {
        required: true;
        description: string;
        displayName: string;
        auth: import("@agnocon/pieces-framework").CustomAuthProperty<{
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>;
        refreshers: string[];
        refreshOnSearch?: boolean;
        options: (propsValue: Record<string, unknown> & {
            auth?: import("@agnocon/pieces-framework").CustomAuthConnectionValue<import("@agnocon/pieces-framework").StaticPropsValue<{
                apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
            }>> | undefined;
        }, ctx: import("@agnocon/pieces-framework").PropertyContext) => Promise<import("@agnocon/pieces-framework").DropdownState<string>>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.DROPDOWN;
        defaultValue?: unknown;
    };
    pollingInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.POLLING, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    domain: {
        required: true;
        description: string;
        displayName: string;
        auth: import("@agnocon/pieces-framework").CustomAuthProperty<{
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>;
        refreshers: string[];
        refreshOnSearch?: boolean;
        options: (propsValue: Record<string, unknown> & {
            auth?: import("@agnocon/pieces-framework").CustomAuthConnectionValue<import("@agnocon/pieces-framework").StaticPropsValue<{
                apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
            }>> | undefined;
        }, ctx: import("@agnocon/pieces-framework").PropertyContext) => Promise<import("@agnocon/pieces-framework").DropdownState<string>>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.DROPDOWN;
        defaultValue?: unknown;
    };
    pollingInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.MANUAL, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    domain: {
        required: true;
        description: string;
        displayName: string;
        auth: import("@agnocon/pieces-framework").CustomAuthProperty<{
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>;
        refreshers: string[];
        refreshOnSearch?: boolean;
        options: (propsValue: Record<string, unknown> & {
            auth?: import("@agnocon/pieces-framework").CustomAuthConnectionValue<import("@agnocon/pieces-framework").StaticPropsValue<{
                apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
            }>> | undefined;
        }, ctx: import("@agnocon/pieces-framework").PropertyContext) => Promise<import("@agnocon/pieces-framework").DropdownState<string>>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.DROPDOWN;
        defaultValue?: unknown;
    };
    pollingInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}> | import("@agnocon/pieces-framework").ITrigger<TriggerStrategy.APP_WEBHOOK, import("@agnocon/pieces-framework").CustomAuthProperty<{
    apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    domain: {
        required: true;
        description: string;
        displayName: string;
        auth: import("@agnocon/pieces-framework").CustomAuthProperty<{
            apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        }>;
        refreshers: string[];
        refreshOnSearch?: boolean;
        options: (propsValue: Record<string, unknown> & {
            auth?: import("@agnocon/pieces-framework").CustomAuthConnectionValue<import("@agnocon/pieces-framework").StaticPropsValue<{
                apiKey: import("@agnocon/pieces-framework").SecretTextProperty<true>;
            }>> | undefined;
        }, ctx: import("@agnocon/pieces-framework").PropertyContext) => Promise<import("@agnocon/pieces-framework").DropdownState<string>>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.DROPDOWN;
        defaultValue?: unknown;
    };
    pollingInterval: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=new-link-created.d.ts.map