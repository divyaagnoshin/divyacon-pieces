export declare const raindropCommons: {
    BASE_URL: string;
    collectionDropdown: import("@agnocon/pieces-framework").DropdownProperty<number, false, import("@agnocon/pieces-framework").OAuth2Property<import("@agnocon/pieces-framework").OAuth2Props>>;
    flattenRaindrop: typeof flattenRaindrop;
};
declare function flattenRaindrop({ raindrop, }: {
    raindrop: RaindropApiItem;
}): FlatRaindrop;
type RaindropApiItem = {
    _id: number;
    title?: string;
    excerpt?: string;
    note?: string;
    link?: string;
    type?: string;
    tags?: string[];
    important?: boolean;
    collection?: {
        $id: number;
    };
    cover?: string;
    created?: string;
    lastUpdate?: string;
};
type FlatRaindrop = {
    id: number;
    title: string | null;
    excerpt: string | null;
    note: string | null;
    link: string | null;
    type: string | null;
    tags: string | null;
    important: boolean;
    collection_id: number | null;
    cover: string | null;
    created_at: string | null;
    updated_at: string | null;
};
export {};
//# sourceMappingURL=index.d.ts.map