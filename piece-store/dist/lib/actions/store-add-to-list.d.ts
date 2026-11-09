import { ArrayProperty, CheckboxProperty, PieceAuthProperty, ShortTextProperty, StaticDropdownProperty } from '@agnocon/pieces-framework';
import { PieceStoreScope } from './common';
export declare const storageAddtoList: import("@agnocon/pieces-framework").IAction<PieceAuthProperty, {
    key: ShortTextProperty<true>;
    value: ArrayProperty<true>;
    ignore_if_exists: CheckboxProperty<false>;
    store_scope: StaticDropdownProperty<PieceStoreScope, true>;
}>;
//# sourceMappingURL=store-add-to-list.d.ts.map