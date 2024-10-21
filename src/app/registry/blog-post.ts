export interface Post {
    title: string;
    id: string;
    path: string;
    date: string
}


export const blogPosts: Post[] = [
    { title: 'Blog Post 1', id: '1', path: 'pages/blog/blog1.md', date: "2024-10-20" },
    { title: 'Blog Post 2', id: '2', path: 'pages/blog/blog2.md', date: "2024-10-21" }
];