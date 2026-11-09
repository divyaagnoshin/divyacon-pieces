export declare enum UserType {
    USER = 0,
    ADMIN = 1,
    BLOCKED = 2,
    AWAITING_ACCESS = 3
}
export interface User {
    name: string;
    avatar?: string;
    displayName: string;
}
export interface DetailedUser extends User {
    id: string;
    color: string;
    profile_picture?: string;
    logged_in: true;
    auth_type: string;
    type: UserType;
}
//# sourceMappingURL=user.d.ts.map