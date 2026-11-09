export declare const IDENTITY_BASE_URL = "https://identity-api.dimo.zone";
export declare const TELEMETRY_BASE_URL = "https://telemetry-api.dimo.zone";
export declare const TOKEN_EXCHANGE_API = "https://token-exchange-api.dimo.zone";
export declare const DEVICE_DEFINIATION_API = "https://device-definitions-api.dimo.zone";
export declare const ATTESTATION_API = "https://attestation-api.dimo.zone";
export declare const VEHICLE_EVENTS_API = "https://vehicle-triggers-api.dimo.zone";
export declare enum Operator {
    EQUAL = "equal",
    GREATER_THAN = "greater_than",
    LESS_THAN = "less_than",
    GREATER_THAN_OR_EQUAL = "greater_or_equal",
    LESS_THAN_OR_EQUAL = "less_or_equal"
}
export declare enum TriggerField {
    Speed = "speed",
    IsIgnitionOn = "isIgnitionOn",
    PowertrainTransmissionTravelledDistance = "powertrainTransmissionTravelledDistance",
    PowertrainFuelSystemRelativeLevel = "powertrainFuelSystemRelativeLevel",
    PowertrainFuelSystemAbsoluteLevel = "powertrainFuelSystemAbsoluteLevel",
    PowertrainTractionBatteryCurrentPower = "powertrainTractionBatteryCurrentPower",
    PowertrainTractionBatteryChargingIsCharging = "powertrainTractionBatteryChargingIsCharging",
    PowertrainTractionBatteryStateOfChargeCurrent = "powertrainTractionBatteryStateOfChargeCurrent",
    ChassisAxleRow1WheelLeftTirePressure = "chassisAxleRow1WheelLeftTirePressure",
    ChassisAxleRow1WheelRightTirePressure = "chassisAxleRow1WheelRightTirePressure",
    ChassisAxleRow2WheelLeftTirePressure = "chassisAxleRow2WheelLeftTirePressure",
    ChassisAxleRow2WheelRightTirePressure = "chassisAxleRow2WheelRightTirePressure"
}
export declare enum TirePressurePosition {
    FRONT_LEFT = "chassisAxleRow1WheelLeftTirePressure",
    FRONT_RIGHT = "chassisAxleRow1WheelRightTirePressure",
    REAR_LEFT = "chassisAxleRow2WheelLeftTirePressure",
    REAR_RIGHT = "chassisAxleRow2WheelRightTirePressure"
}
export declare enum EventType {
    ExtremeBraking = "ExtremeBraking",
    HarshAcceleration = "HarshAcceleration",
    HarshBraking = "HarshBraking",
    HarshCornering = "HarshCornering"
}
//# sourceMappingURL=constants.d.ts.map