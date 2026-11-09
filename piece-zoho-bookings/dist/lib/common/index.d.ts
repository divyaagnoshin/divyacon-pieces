export declare const zohoBookingsAuth: import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>;
export declare const zohoBookingsCommon: {
    baseUrl: (location?: string) => string;
    baseHeaders: (accessToken: string) => {
        Authorization: string;
        'Content-Type': string;
    };
    fetchWorkspaces(accessToken: string, location: string): Promise<any>;
    fetchServices(accessToken: string, location: string, workspaceId?: string): Promise<any>;
    fetchResources(accessToken: string, location: string, serviceId?: string): Promise<any>;
    fetchStaff(accessToken: string, location: string, serviceId?: string): Promise<any>;
    fetchAppointments(accessToken: string, location: string, options?: {
        serviceId?: string;
        staffId?: string;
        status?: string;
        from_time?: string;
        to_time?: string;
        page?: number;
        perPage?: number;
    }): Promise<any>;
    bookAppointmentSchema: {
        workspace_id: import("zod/mini").ZodMiniString<string>;
        service_id: import("zod/mini").ZodMiniString<string>;
        staff_id: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        resource_id: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        group_id: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        from_time: import("zod/mini").ZodMiniString<string>;
        to_time: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        timezone: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        customer_name: import("zod/mini").ZodMiniString<string>;
        customer_email: import("zod/mini").ZodMiniString<string>;
        customer_phone: import("zod/mini").ZodMiniString<string>;
        notes: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        additional_fields: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniRecord<import("zod/mini").ZodMiniString<string>, import("zod/mini").ZodMiniUnknown>>;
        cost_paid: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniNumber<number>>;
    };
    rescheduleAppointmentSchema: {
        booking_id: import("zod/mini").ZodMiniString<string>;
        service_id: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        staff_id: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        group_id: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        start_time: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
    };
    fetchAvailabilitySchema: {
        workspace_id: import("zod/mini").ZodMiniString<string>;
        service_id: import("zod/mini").ZodMiniString<string>;
        staff_id: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        group_id: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        resource_id: import("zod/mini").ZodMiniOptional<import("zod/mini").ZodMiniString<string>>;
        selected_date: import("zod/mini").ZodMiniString<string>;
    };
    getAppointmentDetailsSchema: {
        booking_id: import("zod/mini").ZodMiniString<string>;
    };
    cancelAppointmentSchema: {
        booking_id: import("zod/mini").ZodMiniString<string>;
        action: import("zod/mini").ZodMiniEnum<{
            cancel: "cancel";
            completed: "completed";
            noshow: "noshow";
        }>;
    };
};
export declare const formatDateTime: (date: string) => string;
export declare const bookingIdDropdown: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
//# sourceMappingURL=index.d.ts.map