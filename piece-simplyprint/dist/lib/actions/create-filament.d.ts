/**
 * Create one or more filament spool records.
 *
 * `filament/Create` accepts a single spool description; the backend handles
 * "amount > 1" by replicating the payload server-side. We expose `amount`
 * here for convenience (capped at 500 by the backend at create-time).
 *
 * Catalog mapping: pass either free-text `brand` + `colorName` + `colorHex`
 * (creates a free-form spool), OR the catalog `brandId` / `brandFilamentId`
 * / `brandColorId` / `brandVariantId` chain to attach a known SKU. Free-text
 * fields stay required even when the catalog ids are passed; the backend
 * uses both to populate the spool record.
 */
export declare const createFilamentAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>, {
    brand: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    colorName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    colorHex: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    width: import("@agnocon/pieces-framework").StaticDropdownProperty<"1.75" | "2.85" | "3.00", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"1.75" | "2.85" | "3.00", true>;
    totalLength: import("@agnocon/pieces-framework").NumberProperty<true>;
    totalLengthType: import("@agnocon/pieces-framework").StaticDropdownProperty<"g" | "kg" | "m" | "mm", false> | import("@agnocon/pieces-framework").StaticDropdownProperty<"g" | "kg" | "m" | "mm", true>;
    lengthRemaining: import("@agnocon/pieces-framework").NumberProperty<false>;
    amount: import("@agnocon/pieces-framework").NumberProperty<false>;
    filamentType: import("@agnocon/pieces-framework").NumberProperty<false>;
    cost: import("@agnocon/pieces-framework").NumberProperty<false>;
    locationId: import("@agnocon/pieces-framework").NumberProperty<false>;
    nfcId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    qrId: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    brandId: import("@agnocon/pieces-framework").NumberProperty<false>;
    brandFilamentId: import("@agnocon/pieces-framework").NumberProperty<false>;
    brandColorId: import("@agnocon/pieces-framework").NumberProperty<false>;
    brandVariantId: import("@agnocon/pieces-framework").NumberProperty<false>;
}>;
//# sourceMappingURL=create-filament.d.ts.map