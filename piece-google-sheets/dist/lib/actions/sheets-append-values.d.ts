import { ValueInputOption } from '../common/common';
export declare const sheetsAppendValues: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    spreadsheet_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    worksheet_title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    range: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    values: import("@agnocon/pieces-framework").JsonProperty<true>;
    value_input_option: import("@agnocon/pieces-framework").StaticDropdownProperty<ValueInputOption, true>;
}>;
//# sourceMappingURL=sheets-append-values.d.ts.map