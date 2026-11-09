import { AppConnectionValueForAuthProperty } from '@agnocon/pieces-framework';
import { onfleetAuth } from '../..';
export declare const common: {
    destination: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    unparsedDestination: import("@agnocon/pieces-framework").CheckboxProperty<true>;
    teams: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    teamsRequired: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    team: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    hub: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    hubOptional: import("@agnocon/pieces-framework").DropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    admin: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    managers: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    managersOptional: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    worker: import("@agnocon/pieces-framework").DropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    workers: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, true, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    workersOptional: import("@agnocon/pieces-framework").MultiSelectDropdownProperty<unknown, false, import("@agnocon/pieces-framework").SecretTextProperty<true>>;
    getTeams(apiKey: string): Promise<import("@onfleet/node-onfleet/Resources/Teams").OnfleetTeam[]>;
    getHubs(apiKey: string): Promise<import("@onfleet/node-onfleet/Resources/Hubs").OnfleetHub[]>;
    getAdmins(apiKey: string): Promise<import("@onfleet/node-onfleet/Resources/Administrators").OnfleetAdmin[]>;
    getWorkers(apiKey: string): Promise<import("@onfleet/node-onfleet/Resources/Workers").OnfleetWorker[]>;
    subscribeWebhook(auth: AppConnectionValueForAuthProperty<typeof onfleetAuth>, webhookUrl: string, triggerId: any): Promise<string>;
    unsubscribeWebhook(auth: AppConnectionValueForAuthProperty<typeof onfleetAuth>, webhookId: string): Promise<void>;
};
export declare enum OnfleetWebhookTriggers {
    TASK_STARTED = 0,
    TASK_ETA = 1,
    TASK_ARRIVAL = 2,
    TASK_COMPLETED = 3,
    TASK_FAILED = 4,
    WORKER_DUTY_CHANGE = 5,
    TASK_CREATED = 6,
    TASK_UPDATED = 7,
    TASK_DELETED = 8,
    TASK_ASSIGNED = 9,
    TASK_UNASSIGNED = 10,
    TASK_DELAYED = 12,
    TASK_CLONED = 13,
    SMS_RECIPIENT_MISSED = 14,
    WORKER_CREATED = 15,
    WORKER_DELETED = 16,
    SMS_RECIPIENT_OPT_OUT = 17,
    AUTO_DISPATCH_COMPLETED = 18
}
//# sourceMappingURL=index.d.ts.map