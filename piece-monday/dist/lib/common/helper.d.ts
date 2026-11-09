import { DynamicPropsValue } from '@agnocon/pieces-framework';
import { ColumnValue, MondayColumn } from './models';
type ColumnIdTypeMap = {
    [key: string]: string;
};
export declare function generateColumnIdTypeMap(columns: MondayColumn[]): ColumnIdTypeMap;
export declare const convertMondayColumnToActivepiecesProp: (column: MondayColumn) => import("@agnocon/pieces-framework").CheckboxProperty<false> | import("@agnocon/pieces-framework").ShortTextProperty<false> | import("@agnocon/pieces-framework").DateTimeProperty<false> | import("@agnocon/pieces-framework").StaticMultiSelectDropdownProperty<string, false> | import("@agnocon/pieces-framework").LongTextProperty<false> | import("@agnocon/pieces-framework").NumberProperty<false> | import("@agnocon/pieces-framework").StaticDropdownProperty<string, false> | null;
export declare const convertPropValueToMondayColumnValue: (columnType: string, propValue: DynamicPropsValue) => string | DynamicPropsValue | null;
export declare const parseMondayColumnValue: (columnValue: ColumnValue) => any;
export {};
//# sourceMappingURL=helper.d.ts.map