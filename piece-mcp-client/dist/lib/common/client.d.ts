import { PiecePropValueSchema } from '@agnocon/pieces-framework';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { mcpClientAuth } from '../auth';
declare function connect(auth: McpClientAuthValue): Promise<Client>;
declare function listTools(auth: McpClientAuthValue): Promise<McpToolInfo[]>;
export declare const mcpClient: {
    connect: typeof connect;
    listTools: typeof listTools;
};
export type McpClientAuthValue = PiecePropValueSchema<typeof mcpClientAuth>;
export type McpToolInfo = Awaited<ReturnType<Client['listTools']>>['tools'][number];
export {};
//# sourceMappingURL=client.d.ts.map