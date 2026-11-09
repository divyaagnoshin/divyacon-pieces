import { BettermodeAuthType } from './auth';
export declare const getAuthToken: (auth: BettermodeAuthType) => Promise<BettermodeAuthType>;
export declare const listBadges: (auth: BettermodeAuthType) => Promise<any>;
export declare const listMemberSpaces: (auth: BettermodeAuthType) => Promise<any>;
export declare const assignBadgeToMember: (auth: BettermodeAuthType, badgeId: string, email: string) => Promise<any>;
export declare const revokeBadgeFromMember: (auth: BettermodeAuthType, badgeId: string, email: string) => Promise<any>;
export declare const createPostOfType: (auth: BettermodeAuthType, postTypeName: string, spaceId: string, tagNames: string, title: string, content: string, locked?: boolean) => Promise<any>;
export declare const createDiscussion: (auth: BettermodeAuthType, spaceId: string, tagNames: string, title: string, content: string, locked?: boolean) => Promise<any>;
export declare const createQuestion: (auth: BettermodeAuthType, spaceId: string, tagNames: string, title: string, content: string, locked?: boolean) => Promise<any>;
//# sourceMappingURL=api.d.ts.map