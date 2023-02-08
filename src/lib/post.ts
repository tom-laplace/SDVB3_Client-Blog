// Défini le modèle Post selon celui de la BDD

import type { User } from "./user";

export interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    auteur: User;
}