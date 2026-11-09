export declare const createProduct: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    secret_text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
}>, {
    companyId: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        email: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        secret_text: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    }>>;
    productName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    productCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    productBuyCost: import("@agnocon/pieces-framework").NumberProperty<false>;
    productUnitCost: import("@agnocon/pieces-framework").NumberProperty<false>;
    productType: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    productQuantity: import("@agnocon/pieces-framework").NumberProperty<false>;
    productNotes: import("@agnocon/pieces-framework").LongTextProperty<false>;
    productCategory: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    productSelectedCurrency: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    hsnCode: import("@agnocon/pieces-framework").ShortTextProperty<false>;
    productStockManage: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    showInMenu: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    productSerialized: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    productBatched: import("@agnocon/pieces-framework").CheckboxProperty<false>;
    productDietType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    productBuyTaxJson: import("@agnocon/pieces-framework").LongTextProperty<false>;
    productSalesTaxJson: import("@agnocon/pieces-framework").LongTextProperty<false>;
}>;
//# sourceMappingURL=create-product.d.ts.map