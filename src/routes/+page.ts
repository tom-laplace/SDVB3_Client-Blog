// Récupère tout les posts de la base de données
// Api url : localhost:4004
// Api endpoint : /posts

import type { Post } from "../lib/post";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch("http://localhost:4004/posts");
    const posts = await res.json();

    return {
        props: {
            posts
        }
    };
}





