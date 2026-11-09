import { PieceAuthProperty, ShortTextProperty, StaticDropdownProperty } from '@agnocon/pieces-framework';
import { PieceStoreScope } from './common';
export declare const storageAppendAction: import("@agnocon/pieces-framework").IAction<PieceAuthProperty, {
    key: ShortTextProperty<true>;
    value: ShortTextProperty<true>;
    separator: ShortTextProperty<false>;
    store_scope: StaticDropdownProperty<PieceStoreScope, true>;
}>;
//# sourceMappingURL=store-append-action.d.ts.map