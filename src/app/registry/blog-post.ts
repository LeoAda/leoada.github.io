export interface Post {
    title: string;
    subtitle: string;
    id: string;
    path: string;
    date: string
}


export const blogPosts: Post[] = [
    { title: 'A learning journey', subtitle: "In data and AI", id: '1', path: 'pages/blog/blog1.md', date: "2024-10-20" },
];