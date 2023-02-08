import type { User } from "./user";

export interface Profile {
    id: number;
    username: string;
    avatar: string;
    bio: string;
    user: User;
}