import { Dimension } from '../common/common';
export declare const sheetsUpdateDimensionProperties: import("@agnocon/pieces-framework").IAction<(import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props> | import("@agnocon/pieces-framework").CustomAuthProperty<{
    serviceAccount: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    userEmail: import("@agnocon/pieces-framework").ShortTextProperty<false>;
}>)[], {
    spreadsheet_id: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    sheet_id: import("@agnocon/pieces-framework").NumberProperty<true>;
    dimension: import("@agnocon/pieces-framework").StaticDropdownProperty<Dimension, true>;
    start_index: import("@agnocon/pieces-framework").NumberProperty<true>;
    end_index: import("@agnocon/pieces-framework").NumberProperty<true>;
    pixel_size: import("@agnocon/pieces-framework").NumberProperty<false>;
    hidden: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=sheets-update-dimension-properties.d.ts.map