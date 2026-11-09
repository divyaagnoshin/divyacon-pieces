import { Dimension } from '../common/common';
export declare const sheetsInsertDimension: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    spreadsheet_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sheet_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    dimension: import("@agnocon/pieces-framework").StaticDropdownProperty<Dimension, true>;
    start_index: import("@agnocon/pieces-framework").NumberProperty<true>;
    end_index: import("@agnocon/pieces-framework").NumberProperty<true>;
    inherit_from_before: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=sheets-insert-dimension.d.ts.map