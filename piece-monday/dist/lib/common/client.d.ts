import { Board, MondayColumn, User } from './models';
export declare class mondayClient {
    private client;
    constructor(apiKey: string);
    listWorkspcaes(): Promise<{
        data: {
            workspaces: {
                id: string;
                name: string;
            }[];
        };
        account_id: number;
    }>;
    listWorkspaceBoards(variables: object): Promise<{
        data: {
            boards: {
                id: string;
                name: string;
                type: string;
            }[];
        };
        account_id: number;
    }>;
    listBoardGroups(variables: object): Promise<{
        data: {
            boards: Board[];
        };
        account_id: number;
    }>;
    listBoardColumns(variables: object): Promise<{
        data: {
            boards: {
                columns: MondayColumn[];
            }[];
        };
        account_id: number;
    }>;
    listBoardItems(variables: object): Promise<{
        data: {
            boards: Board[];
        };
        account_id: number;
    }>;
    createItem(variables: object): Promise<{
        data: any;
        account_id: number;
    }>;
    updateItem(variables: object): Promise<{
        data: any;
        account_id: number;
    }>;
    createWebhook(variables: object): Promise<{
        data: {
            id: string;
            board_id: string;
        };
        account_id: number;
    }>;
    deleteWebhook(variables: object): Promise<{
        data: any;
        account_id: number;
    }>;
    listUsers(): Promise<{
        data: {
            users: User[];
        };
        account_id: number;
    }>;
    getBoardItemValues(variables: object): Promise<{
        data: {
            boards: Board[];
        };
        account_id: number;
    }>;
    getItemColumnValues(variables: object): Promise<{
        data: {
            boards: Board[];
        };
        account_id: number;
    }>;
    createColumn(variables: object): Promise<{
        data: {
            id: string;
        };
        account_id: number;
    }>;
    createGroup(variables: object): Promise<{
        data: {
            id: string;
        };
        account_id: number;
    }>;
    createUpdate(variables: object): Promise<{
        data: {
            id: string;
        };
        account_id: number;
    }>;
}
//# sourceMappingURL=client.d.ts.map