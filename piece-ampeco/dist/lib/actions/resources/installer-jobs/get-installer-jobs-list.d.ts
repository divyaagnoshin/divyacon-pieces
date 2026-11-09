/**
 * Generated from API version: 3.96.4
 */
export declare const getInstallerJobsListAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    filter__installationAndMaintenanceCompanyId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__locationId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__chargePointId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__status: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    filter__installerAdminId: import("@agnocon/pieces-framework").NumberProperty<false>;
    filter__createdAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__createdBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__lastUpdatedAfter: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    filter__lastUpdatedBefore: import("@agnocon/pieces-framework").DateTimeProperty<false>;
    per_page: import("@agnocon/pieces-framework").NumberProperty<false>;
    usePagination: import("@agnocon/pieces-framework").CheckboxProperty<false>;
}>;
//# sourceMappingURL=get-installer-jobs-list.d.ts.map