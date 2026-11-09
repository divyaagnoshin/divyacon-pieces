declare enum TimeUnit {
    SECONDS = "seconds",
    MINUTES = "minutes",
    HOURS = "hours",
    DAYS = "days"
}
export declare const delayForAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").PieceAuthProperty, {
    markdown: import("@agnocon/pieces-framework/dist/lib/property/input/markdown-property").MarkDownProperty;
    unit: import("@agnocon/pieces-framework").StaticDropdownProperty<TimeUnit, true>;
    delayFor: import("@agnocon/pieces-framework").NumberProperty<true>;
}>;
export {};
//# sourceMappingURL=delay-for-action.d.ts.map