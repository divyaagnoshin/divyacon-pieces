declare const filamentSample: {
    id: number;
    uid: string;
    type: {
        id: number;
        name: string;
    };
    brand: string;
    brandId: number;
    brandFilamentId: number;
    brandColorId: number;
    brandVariantId: number | null;
    colorName: string;
    colorHex: string;
    dia: number;
    note: string | null;
    productionId: string | null;
    batchId: string | null;
    cost: number;
};
declare function envelope<T extends object>(event: string, data: T): {
    webhook_id: number;
    event: string;
    timestamp: number;
    data: T;
};
export declare const SAMPLE: {
    printStarted: {
        job: {
            id: number;
            uid: string;
            panel_url: string;
            printer_id: number;
            state: string;
            file: string;
            percentage: number;
            time_left: number | null;
            current_layer: number;
            analysis: Record<string, unknown>;
            started: number;
            ended: number;
            ai: Record<string, unknown> | null;
            autoprint: boolean;
            printer: {
                id: number;
                name: string;
                group: {
                    id: number;
                    name: string;
                } | null;
            };
            cost: number;
            duration: number;
            skippedObjects: Array<Record<string, unknown>> | null;
        };
        user: {
            id: number;
            sso: boolean;
            first_name: string;
            last_name: string;
            avatar: string;
        };
        started_by: {
            id: number;
            sso: boolean;
            first_name: string;
            last_name: string;
            avatar: string;
        };
    };
    printPaused: {
        job: {
            id: number;
            uid: string;
            panel_url: string;
            printer_id: number;
            state: string;
            file: string;
            percentage: number;
            time_left: number | null;
            current_layer: number;
            analysis: Record<string, unknown>;
            started: number;
            ended: number;
            ai: Record<string, unknown> | null;
            autoprint: boolean;
            printer: {
                id: number;
                name: string;
                group: {
                    id: number;
                    name: string;
                } | null;
            };
            cost: number;
            duration: number;
            skippedObjects: Array<Record<string, unknown>> | null;
        };
    };
    printResumed: {
        job: {
            id: number;
            uid: string;
            panel_url: string;
            printer_id: number;
            state: string;
            file: string;
            percentage: number;
            time_left: number | null;
            current_layer: number;
            analysis: Record<string, unknown>;
            started: number;
            ended: number;
            ai: Record<string, unknown> | null;
            autoprint: boolean;
            printer: {
                id: number;
                name: string;
                group: {
                    id: number;
                    name: string;
                } | null;
            };
            cost: number;
            duration: number;
            skippedObjects: Array<Record<string, unknown>> | null;
        };
    };
    printFinished: {
        job: {
            id: number;
            uid: string;
            panel_url: string;
            printer_id: number;
            state: string;
            file: string;
            percentage: number;
            time_left: number | null;
            current_layer: number;
            analysis: Record<string, unknown>;
            started: number;
            ended: number;
            ai: Record<string, unknown> | null;
            autoprint: boolean;
            printer: {
                id: number;
                name: string;
                group: {
                    id: number;
                    name: string;
                } | null;
            };
            cost: number;
            duration: number;
            skippedObjects: Array<Record<string, unknown>> | null;
        };
    };
    printFailed: {
        job: {
            id: number;
            uid: string;
            panel_url: string;
            printer_id: number;
            state: string;
            file: string;
            percentage: number;
            time_left: number | null;
            current_layer: number;
            analysis: Record<string, unknown>;
            started: number;
            ended: number;
            ai: Record<string, unknown> | null;
            autoprint: boolean;
            printer: {
                id: number;
                name: string;
                group: {
                    id: number;
                    name: string;
                } | null;
            };
            cost: number;
            duration: number;
            skippedObjects: Array<Record<string, unknown>> | null;
        };
    };
    printCancelled: {
        job: {
            id: number;
            uid: string;
            panel_url: string;
            printer_id: number;
            state: string;
            file: string;
            percentage: number;
            time_left: number | null;
            current_layer: number;
            analysis: Record<string, unknown>;
            started: number;
            ended: number;
            ai: Record<string, unknown> | null;
            autoprint: boolean;
            printer: {
                id: number;
                name: string;
                group: {
                    id: number;
                    name: string;
                } | null;
            };
            cost: number;
            duration: number;
            skippedObjects: Array<Record<string, unknown>> | null;
        };
        user: {
            id: number;
            sso: boolean;
            first_name: string;
            last_name: string;
            avatar: string;
        };
    };
    queueItemAdded: {
        queue_item: {
            id: number;
            filename: string;
            note: string | null;
            model: boolean;
            printable: boolean;
            type: string;
            zipPrintable: boolean;
            zipNoModel: boolean | null;
            left: number;
            printed: number;
            filesystem_id: string;
            for: {
                printers: null;
                models: null;
                groups: null;
            };
            tags: number[] | null;
            group: number;
            analysis: Record<string, unknown> | null;
            added: string;
            size: number;
            index: number | null;
            sort_order: number;
            user: string;
            user_id: number;
            custom_fields: Array<Record<string, unknown>>;
            quota_warnings: {
                over_quota: boolean;
                insufficient_balance: boolean;
                would_exceed: string[];
                details: Array<Record<string, unknown>>;
            };
        };
        user: {
            id: number;
            sso: boolean;
            first_name: string;
            last_name: string;
            avatar: string;
        };
    };
    queueItemApproved: {
        queue_item: {
            id: number;
            filename: string;
            note: string | null;
            model: boolean;
            printable: boolean;
            type: string;
            zipPrintable: boolean;
            zipNoModel: boolean | null;
            left: number;
            printed: number;
            filesystem_id: string;
            for: {
                printers: null;
                models: null;
                groups: null;
            };
            tags: number[] | null;
            group: number;
            analysis: Record<string, unknown> | null;
            added: string;
            size: number;
            index: number | null;
            sort_order: number;
            user: string;
            user_id: number;
            custom_fields: Array<Record<string, unknown>>;
            quota_warnings: {
                over_quota: boolean;
                insufficient_balance: boolean;
                would_exceed: string[];
                details: Array<Record<string, unknown>>;
            };
        };
        approved_by: {
            id: number;
            sso: boolean;
            first_name: string;
            last_name: string;
            avatar: string;
        };
    };
    queueItemDenied: {
        queue_item: {
            id: number;
            filename: string;
            note: string | null;
            model: boolean;
            printable: boolean;
            type: string;
            zipPrintable: boolean;
            zipNoModel: boolean | null;
            left: number;
            printed: number;
            filesystem_id: string;
            for: {
                printers: null;
                models: null;
                groups: null;
            };
            tags: number[] | null;
            group: number;
            analysis: Record<string, unknown> | null;
            added: string;
            size: number;
            index: number | null;
            sort_order: number;
            user: string;
            user_id: number;
            custom_fields: Array<Record<string, unknown>>;
            quota_warnings: {
                over_quota: boolean;
                insufficient_balance: boolean;
                would_exceed: string[];
                details: Array<Record<string, unknown>>;
            };
        };
        denied_by: {
            id: number;
            sso: boolean;
            first_name: string;
            last_name: string;
            avatar: string;
        };
        reason: string;
        removed: boolean;
    };
    queueItemPendingApproval: {
        queue_item: {
            id: number;
            filename: string;
            note: string | null;
            model: boolean;
            printable: boolean;
            type: string;
            zipPrintable: boolean;
            zipNoModel: boolean | null;
            left: number;
            printed: number;
            filesystem_id: string;
            for: {
                printers: null;
                models: null;
                groups: null;
            };
            tags: number[] | null;
            group: number;
            analysis: Record<string, unknown> | null;
            added: string;
            size: number;
            index: number | null;
            sort_order: number;
            user: string;
            user_id: number;
            custom_fields: Array<Record<string, unknown>>;
            quota_warnings: {
                over_quota: boolean;
                insufficient_balance: boolean;
                would_exceed: string[];
                details: Array<Record<string, unknown>>;
            };
        };
        user: {
            id: number;
            sso: boolean;
            first_name: string;
            last_name: string;
            avatar: string;
        };
    };
    filamentAssigned: {
        filament: {
            id: number;
            uid: string;
            type: {
                id: number;
                name: string;
            };
            brand: string;
            brandId: number;
            brandFilamentId: number;
            brandColorId: number;
            brandVariantId: number | null;
            colorName: string;
            colorHex: string;
            dia: number;
            note: string | null;
            productionId: string | null;
            batchId: string | null;
            cost: number;
        };
        printer: {
            id: number;
            name: string;
        };
        user: {
            id: number;
            sso: boolean;
            first_name: string;
            last_name: string;
            avatar: string;
        };
        replaced_spool: typeof filamentSample | null;
    };
    filamentUnassigned: {
        filament: {
            id: number;
            uid: string;
            type: {
                id: number;
                name: string;
            };
            brand: string;
            brandId: number;
            brandFilamentId: number;
            brandColorId: number;
            brandVariantId: number | null;
            colorName: string;
            colorHex: string;
            dia: number;
            note: string | null;
            productionId: string | null;
            batchId: string | null;
            cost: number;
        };
        printer: {
            id: number;
            name: string;
        };
        user: {
            id: number;
            sso: boolean;
            first_name: string;
            last_name: string;
            avatar: string;
        };
    };
    aiFailureDetected: {
        job: {
            id: number;
            uid: string;
            panel_url: string;
            printer_id: number;
            state: string;
            file: string;
            percentage: number;
            time_left: number | null;
            current_layer: number;
            analysis: Record<string, unknown>;
            started: number;
            ended: number;
            ai: Record<string, unknown> | null;
            autoprint: boolean;
            printer: {
                id: number;
                name: string;
                group: {
                    id: number;
                    name: string;
                } | null;
            };
            cost: number;
            duration: number;
            skippedObjects: Array<Record<string, unknown>> | null;
        };
        image: string;
        failures: {
            confidence: number;
            type: string;
        }[];
    };
    maintenanceJobOverdue: {
        job: {
            id: number;
            printer_id: number;
            printer_name: string;
            schedule_id: number | null;
            created_by: {
                id: number;
                name: string;
            } | null;
            title: string;
            description: string;
            status: string;
            priority: string;
            scheduled_date: string;
            started_at: string | null;
            completed_at: string | null;
            cancelled_at: string | null;
            completion_summary: string | null;
            auto_created: boolean;
            scheduled_date_manually_set: boolean;
            progress: number;
            completed_tasks: number;
            total_tasks: number;
            required_tasks: number;
            completed_required_tasks: number;
            assignees: Array<{
                id: number;
                name: string;
                avatar: string;
            }>;
            problems: Array<Record<string, unknown>>;
        };
        printer: {
            id: number;
            name: string;
        };
        scheduled_date: string;
    };
    maintenanceProblemReported: {
        problem: {
            id: number;
            printer_id: number;
            printer_name: string;
            problem_type: Record<string, unknown> | null;
            reported_by: {
                id: number;
                name: string;
            } | null;
            print_job_id: number | null;
            description: string;
            status: string;
            resolved_at: string | null;
            resolved_by_job_id: number | null;
            linked_jobs: Array<{
                id: number;
                title: string;
                status: string;
            }>;
            custom_field_values: Array<Record<string, unknown>>;
            created_at: string;
        };
        printer: {
            id: number;
            name: string;
        };
        user: {
            id: number;
            sso: boolean;
            first_name: string;
            last_name: string;
            avatar: string;
        };
    };
};
export declare const simplyprintSamples: {
    envelope: typeof envelope;
};
export {};
//# sourceMappingURL=samples.d.ts.map