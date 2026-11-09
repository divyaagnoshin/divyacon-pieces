export declare const findBoxAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    query: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    pipelineKey: {
        required: false;
        displayName: string;
        description?: string | undefined;
        auth: import("@agnocon/pieces-framework").SecretTextProperty<true>;
        refreshers: string[];
        refreshOnSearch?: boolean;
        options: (propsValue: Record<string, unknown> & {
            auth?: import("@agnocon/piece-types").SecretTextConnectionValue | undefined;
        }, ctx: import("@agnocon/pieces-framework").PropertyContext) => Promise<import("@agnocon/pieces-framework").DropdownState<string>>;
        valueSchema: string;
        type: import("@agnocon/pieces-framework").PropertyType.DROPDOWN;
        defaultValue?: unknown;
    };
}>;
//# sourceMappingURL=find-box.d.ts.map