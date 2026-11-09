declare function buildStartOptionsProp(): import("@agnocon/pieces-framework").ObjectProperty<false>;
declare function normalizeStartOptions(raw: Record<string, unknown> | null | undefined): string | null;
export declare const simplyprintStartOptions: {
    buildStartOptionsProp: typeof buildStartOptionsProp;
    normalizeStartOptions: typeof normalizeStartOptions;
};
export interface StartOptions {
    nozzle?: string;
    filament_material?: string;
    print_speed?: string;
    layer_height?: string;
    infill?: string;
    quality?: string;
    [k: string]: unknown;
}
export {};
//# sourceMappingURL=start-options.d.ts.map