import { HttpMessageBody, HttpMethod, QueryParams } from '@agnocon/pieces-common';
import { SearchRequest, SearchResult } from './models/search';
import { DeviceListResponse, PlaybackPauseRequest, PlaybackPlayRequest, PlaybackSeekRequest, PlaybackState, PlaybackVolumeRequest } from './models/playback';
import { Playlist, PlaylistAddItemsRequest, PlaylistCreateRequest, PlaylistItem, PlaylistRemoveItemsRequest, PlaylistReorderItemsRequest, PlaylistUpdateRequest } from './models/playlist';
import { User } from './models/user';
import { Pagination, PaginationRequest } from './models/common';
import { LibraryModifyItemsRequest } from './models/library';
export declare function prepareQuery(request?: Record<string, any>): QueryParams;
export declare class SpotifyWebApi {
    private accessToken;
    constructor(accessToken: string);
    makeRequest<T extends HttpMessageBody>(method: HttpMethod, url: string, query?: QueryParams, body?: object): Promise<T>;
    search(request: SearchRequest): Promise<SearchResult>;
    getDevices(): Promise<DeviceListResponse>;
    getPlaybackState(): Promise<PlaybackState>;
    setVolume(request: PlaybackVolumeRequest): Promise<void>;
    pause(request: PlaybackPauseRequest): Promise<void>;
    play(request: PlaybackPlayRequest): Promise<void>;
    seek(request: PlaybackSeekRequest): Promise<void>;
    getCurrentUser(): Promise<User>;
    getCurrentUserPlaylists(request?: PaginationRequest): Promise<Pagination<Playlist>>;
    getAllCurrentUserPlaylists(): Promise<Playlist[]>;
    createPlaylist(userId: string, request: PlaylistCreateRequest): Promise<Playlist>;
    updatePlaylist(id: string, request: PlaylistUpdateRequest): Promise<void>;
    getPlaylist(id: string): Promise<Playlist>;
    getPlaylistItems(id: string, request?: PaginationRequest): Promise<Pagination<PlaylistItem>>;
    getAllPlaylistItems(id: string): Promise<PlaylistItem[]>;
    getSavedTracks(request?: PaginationRequest): Promise<Pagination<PlaylistItem>>;
    getAllSavedTracks(): Promise<PlaylistItem[]>;
    addSavedItems(request: LibraryModifyItemsRequest): Promise<void>;
    removeSavedItems(request: LibraryModifyItemsRequest): Promise<void>;
    addItemsToPlaylist(id: string, request: PlaylistAddItemsRequest): Promise<void>;
    removeItemsFromPlaylist(id: string, request: PlaylistRemoveItemsRequest): Promise<void>;
    reorderPlaylist(id: string, request: PlaylistReorderItemsRequest): Promise<void>;
}
//# sourceMappingURL=client.d.ts.map