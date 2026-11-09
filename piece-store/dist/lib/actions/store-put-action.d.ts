import { PieceAuthProperty, ShortTextProperty, StaticDropdownProperty } from '@agnocon/pieces-framework';
import { PieceStoreScope } from './common';
export declare const storagePutAction: import("@agnocon/pieces-framework").IAction<PieceAuthProperty, {
    key: ShortTextProperty<true>;
    value: ShortTextProperty<true>;
    store_scope: StaticDropdownProperty<PieceStoreScope, true>;
}>;
//# sourceMappingURL=store-put-action.d.ts.map