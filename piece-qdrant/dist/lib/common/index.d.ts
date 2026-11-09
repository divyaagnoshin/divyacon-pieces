export declare const decodeEmbeddings: (embeddingsString: Buffer) => Float32Array[];
export declare const filteringProps: {
    must: import("@agnocon/pieces-framework").ObjectProperty<false>;
    must_not: import("@agnocon/pieces-framework").ObjectProperty<false>;
};
export declare const seclectPointsProps: {
    getPointsBy: import("@agnocon/pieces-framework").StaticDropdownProperty<string, true>;
    infosToGetPoint: import("@agnocon/pieces-framework").DynamicProperties<true, import("@agnocon/pieces-framework").CustomAuthProperty<{
        serverAddress: import("@agnocon/pieces-framework").ShortTextProperty<true>;
        key: import("@agnocon/pieces-framework").SecretTextProperty<true>;
    }>>;
};
export declare const convertToFilter: (infosToGetPoint: {
    must: any;
    must_not: any;
}) => {
    must: ({
        has_id: (string | number)[];
    } | {
        key: string;
        match: {
            value: any;
        } | {
            any: any[];
        };
    })[];
    must_not: ({
        has_id: (string | number)[];
    } | {
        key: string;
        match: {
            value: any;
        } | {
            any: any[];
        };
    })[];
};
export declare const collectionName: import("@agnocon/pieces-framework").ShortTextProperty<true>;
//# sourceMappingURL=index.d.ts.map