import * as z from 'zod/mini';
export declare const bookAppointment: {
    workspace_id: z.ZodMiniString<string>;
    service_id: z.ZodMiniString<string>;
    staff_id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    resource_id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    group_id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    from_time: z.ZodMiniString<string>;
    to_time: z.ZodMiniOptional<z.ZodMiniString<string>>;
    timezone: z.ZodMiniOptional<z.ZodMiniString<string>>;
    customer_name: z.ZodMiniString<string>;
    customer_email: z.ZodMiniString<string>;
    customer_phone: z.ZodMiniString<string>;
    notes: z.ZodMiniOptional<z.ZodMiniString<string>>;
    additional_fields: z.ZodMiniOptional<z.ZodMiniRecord<z.ZodMiniString<string>, z.ZodMiniUnknown>>;
    cost_paid: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
};
export declare const rescheduleAppointment: {
    booking_id: z.ZodMiniString<string>;
    service_id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    staff_id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    group_id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    start_time: z.ZodMiniOptional<z.ZodMiniString<string>>;
};
export declare const fetchAvailability: {
    workspace_id: z.ZodMiniString<string>;
    service_id: z.ZodMiniString<string>;
    staff_id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    group_id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    resource_id: z.ZodMiniOptional<z.ZodMiniString<string>>;
    selected_date: z.ZodMiniString<string>;
};
export declare const getAppointmentDetails: {
    booking_id: z.ZodMiniString<string>;
};
export declare const cancelAppointment: {
    booking_id: z.ZodMiniString<string>;
    action: z.ZodMiniEnum<{
        cancel: "cancel";
        completed: "completed";
        noshow: "noshow";
    }>;
};
//# sourceMappingURL=schemas.d.ts.map