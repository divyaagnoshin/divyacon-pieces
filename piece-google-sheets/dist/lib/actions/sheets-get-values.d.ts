import { Dimension } from '../common/common';
export declare const sheetsGetValues: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    spreadsheet_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    worksheet_title: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    range: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    major_dimension: import("@agnocon/pieces-framework").StaticDropdownProperty<Dimension, true>;
    value_render_option: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
}>;
//# sourceMappingURL=sheets-get-values.d.ts.map