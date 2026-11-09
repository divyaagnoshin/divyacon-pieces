export declare const shareReportEmailAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").SecretTextProperty<true>, {
    reportId: import("@agnocon/pieces-framework").DropdownProperty<string, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    to: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    subject: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    message: import("@agnocon/pieces-framework").LongTextProperty<false>;
    include_report_html: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    attach_export: import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false>;
    report_parameters: import("@agnocon/pieces-framework").ObjectProperty<false>;
}>;
//# sourceMappingURL=share-report-email.action.d.ts.map