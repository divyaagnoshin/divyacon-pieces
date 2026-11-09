import { Client } from '@microsoft/microsoft-graph-client';
import { PlannerBucket } from '@microsoft/microsoft-graph-types';
import { AuthenticationParams, CreateBucketParams, CreatePlanParams, CreateTaskParams, DeleteBucketParams, DeleteTaskParams, GetBucketDetailsParams, ListBucketsParams, ListTasksParams, UpdateBucketParams, UpdatePlanParams, UpdateTaskParams } from './types';
export declare const microsoft365PlannerAuth: import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>;
export declare const microsoft365PlannerCommon: {
    endpoints: {
        createPlan: string;
        listPlans: string;
        listGroups: string;
        planDetail: (id: string) => string;
        listBuckets: (planId: string) => string;
        listPlanTasks: (planId: string) => string;
        createBucket: string;
        bucketDetail: (id: string) => string;
        createTask: string;
        deleteTask: (id: string) => string;
    };
    getClient: ({ auth }: AuthenticationParams) => Client;
    getUser: ({ auth }: AuthenticationParams) => Promise<import("@microsoft/microsoft-graph-types").User>;
    getEtag: ({ auth, id, endpointType, }: AuthenticationParams & {
        id: string;
        endpointType: "planDetail" | "listBuckets" | "listPlanTasks" | "bucketDetail" | "deleteTask" | "deleteTask";
    }) => Promise<string>;
    listUsers: ({ auth }: AuthenticationParams) => Promise<import("@microsoft/microsoft-graph-types").User[]>;
    listGroups: ({ auth }: AuthenticationParams) => Promise<import("@microsoft/microsoft-graph-types").Group[]>;
    listPlans: ({ auth }: AuthenticationParams) => Promise<import("@microsoft/microsoft-graph-types").PlannerPlan[]>;
    listBuckets: ({ auth, planId }: ListBucketsParams) => Promise<PlannerBucket[]>;
    listTasks: ({ auth, planId }: ListTasksParams) => Promise<import("@microsoft/microsoft-graph-types").PlannerTask[]>;
    createPlan: ({ auth, ...planParams }: CreatePlanParams) => Promise<import("@microsoft/microsoft-graph-types").PlannerPlan>;
    createBucket: ({ auth, ...bucketParams }: CreateBucketParams) => Promise<PlannerBucket>;
    updateBucket: ({ auth, id, name, orderHint }: UpdateBucketParams) => Promise<{
        success: boolean;
    }>;
    deleteTask: ({ auth, id }: DeleteTaskParams) => Promise<{
        success: boolean;
    }>;
    createTask: ({ auth, ...taskParams }: CreateTaskParams) => Promise<import("@microsoft/microsoft-graph-types").PlannerTask>;
    updateTask: ({ auth, id, ...taskParams }: UpdateTaskParams) => Promise<{
        success: boolean;
    }>;
    deleteBucket: ({ auth, id }: DeleteBucketParams) => Promise<{
        success: boolean;
    }>;
    updatePlan: ({ auth, id, title }: UpdatePlanParams) => Promise<{
        success: boolean;
    }>;
    getBucketDetails: ({ auth, bucketId }: GetBucketDetailsParams) => Promise<PlannerBucket>;
};
//# sourceMappingURL=index.d.ts.map