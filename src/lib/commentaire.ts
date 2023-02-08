import type { Post } from "./post";
import type { User } from "./user";

export interface Commentaire {
    id: number;
    content: string;
    created_at: string;
    auteur: User;
    post: Post;
}