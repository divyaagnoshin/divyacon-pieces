/**
 * Generated from API version: 3.96.4
 */
export declare const circuitCreateAction: import("@agnocon/pieces-framework").IAction<import("@agnocon/pieces-framework").CustomAuthProperty<{
    baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
}>, {
    name: import("@agnocon/pieces-framework").ShortTextProperty<true>;
    parentCircuitId: import("@agnocon/pieces-framework").NumberProperty<false>;
    phases: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    phaseRotation: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    connectedPhase: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    electricalConfiguration: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxVoltage: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    maxCurrent: import("@agnocon/pieces-framework").NumberProperty<true>;
    minChargePointCurrent: import("@agnocon/pieces-framework").NumberProperty<false>;
    setSessionLimitToZeroOnIdle: import("@agnocon/pieces-framework").StaticDropdownProperty<string, false>;
    electricityMeterId: import("@agnocon/pieces-framework").NumberProperty<false>;
    offlineReservedCurrent: import("@agnocon/pieces-framework").NumberProperty<false>;
    loadBalancingIntegration__id: import("@agnocon/pieces-framework").NumberProperty<false>;
    loadBalancingIntegration__fields_VariantType: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    loadBalancingIntegration__fields: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        baseApiUrl: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        token: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
}>;
//# sourceMappingURL=circuit-create.d.ts.map