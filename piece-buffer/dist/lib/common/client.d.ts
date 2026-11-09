declare function graphqlRequest<T>({ accessToken, query, variables, }: {
    accessToken: string;
    query: string;
    variables?: Record<string, unknown>;
}): Promise<T>;
export declare const bufferClient: {
    graphql: typeof graphqlRequest;
    apiUrl: string;
};
export {};
//# sourceMappingURL=client.d.ts.map