export type TodoistProjectFull = {
    id: string;
    name: string;
    color?: string;
    parent_id?: string | null;
    order?: number;
    is_favorite?: boolean;
    is_archived?: boolean;
    view_style?: string;
    description?: string;
    url?: string;
};
export type TodoistSectionFull = {
    id: string;
    name: string;
    project_id: string;
    order?: number;
    is_archived?: boolean;
};
type ProjectCreateBody = {
    name: string;
    color?: string;
    parent_id?: string;
    view_style?: string;
    description?: string;
    is_favorite?: boolean;
    workspace_id?: string;
};
type ProjectUpdateBody = {
    name?: string;
    color?: string;
    view_style?: string;
    description?: string;
    is_favorite?: boolean;
};
type SectionCreateBody = {
    name: string;
    project_id: string;
    order?: number;
};
type SectionUpdateBody = {
    name: string;
};
export declare const todoistProjectsSectionsClient: {
    projects: {
        create(token: string, body: ProjectCreateBody): Promise<TodoistProjectFull>;
        update(token: string, projectId: string, body: ProjectUpdateBody): Promise<TodoistProjectFull>;
        get(token: string, projectId: string): Promise<TodoistProjectFull>;
        unarchive(token: string, projectId: string): Promise<unknown>;
        listArchived(token: string): Promise<TodoistProjectFull[]>;
    };
    sections: {
        create(token: string, body: SectionCreateBody): Promise<TodoistSectionFull>;
        update(token: string, sectionId: string, body: SectionUpdateBody): Promise<TodoistSectionFull>;
        get(token: string, sectionId: string): Promise<TodoistSectionFull>;
        delete(token: string, sectionId: string): Promise<void>;
        listArchived(token: string, projectId: string): Promise<TodoistSectionFull[]>;
    };
};
export {};
//# sourceMappingURL=projects-sections-client.d.ts.map