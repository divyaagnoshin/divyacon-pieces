export declare const API_URL = "https://acuityscheduling.com/api/v1";
export declare function fetchAvailableDates(accessToken: string, appointmentTypeId: number, month: string, timezone?: string, calendarId?: number): Promise<string[]>;
export declare function fetchAvailableTimes(accessToken: string, appointmentTypeId: number, date: string, timezone?: string, calendarId?: number, ignoreAppointmentIDs?: number[]): Promise<{
    time: string;
    datetime: string;
}[]>;
export declare function getAppointmentDetails(appointmentId: string, accessToken: string): Promise<any>;
export declare function fetchAppointmentTypes(accessToken: string, includeDeleted?: boolean): Promise<{
    label: string;
    value: number;
}[]>;
export declare function fetchCalendars(accessToken: string): Promise<{
    label: string;
    value: number;
}[]>;
export declare function fetchFormFields(accessToken: string): Promise<{
    label: string;
    value: number;
}[]>;
export declare function fetchAddons(accessToken: string, appointmentTypeId?: number): Promise<{
    label: string;
    value: number;
}[]>;
export declare function fetchLabels(accessToken: string): Promise<{
    label: string;
    value: number;
}[]>;
//# sourceMappingURL=index.d.ts.map