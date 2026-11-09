import { Dimension, ValueInputOption } from '../common/common';
export declare const sheetsUpdateValues: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    spreadsheet_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    worksheet_title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    range: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    values: import("@agnocon/pieces-framework").JsonProperty<true>;
    value_input_option: import("@agnocon/pieces-framework").StaticDropdownProperty<ValueInputOption, true>;
    major_dimension: import("@agnocon/pieces-framework").StaticDropdownProperty<Dimension, false>;
}>;
//# sourceMappingURL=sheets-update-values.d.ts.map