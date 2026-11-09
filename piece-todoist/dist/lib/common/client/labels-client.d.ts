export type TodoistLabel = {
    id: string;
    name: string;
    color: string;
    order: number;
    is_favorite: boolean;
};
export type CreateLabelParams = {
    token: string;
    name: string;
    color?: string | undefined;
    order?: number | undefined;
    is_favorite?: boolean | undefined;
};
export type UpdateLabelParams = {
    token: string;
    label_id: string;
    name?: string | undefined;
    color?: string | undefined;
    order?: number | undefined;
    is_favorite?: boolean | undefined;
};
export declare const todoistLabelsClient: {
    create({ token, name, color, order, is_favorite, }: CreateLabelParams): Promise<TodoistLabel>;
    update({ token, label_id, name, color, order, is_favorite, }: UpdateLabelParams): Promise<TodoistLabel>;
    delete({ token, label_id }: {
        token: string;
        label_id: string;
    }): Promise<void>;
    list({ token }: {
        token: string;
    }): Promise<TodoistLabel[]>;
    get({ token, label_id }: {
        token: string;
        label_id: string;
    }): Promise<TodoistLabel>;
    listShared({ token, omit_personal, }: {
        token: string;
        omit_personal?: boolean | undefined;
    }): Promise<string[]>;
    renameShared({ token, name, new_name, }: {
        token: string;
        name: string;
        new_name: string;
    }): Promise<void>;
    removeShared({ token, name }: {
        token: string;
        name: string;
    }): Promise<void>;
};
//# sourceMappingURL=labels-client.d.ts.map